/*
 * ADL2-core
 * Copyright (c) 2013-2014 Marand d.o.o. (www.marand.com)
 *
 * This file is part of ADL2-core.
 *
 * ADL2-core is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

(function (ArchetypeEditor) {

    ArchetypeEditor.Modules = {};

    /**
     * Base object for rm handlers.
     * @abstract
     * @constructor
     */
    ArchetypeEditor.Modules.RmHandler = function () {
        var handler = this;

        handler.createCommonContext = function (stage, cons, parentCons) {
            cons = cons || {};
            var context = {
                "panel_id": GuiUtils.generateId(),
                "type": cons.rm_type_name
            };
            if (parentCons) {
                var h = stage.archetypeEditor.getRmTypeHandler(parentCons);
                if (h) {
                    context.parent = h.createContext(stage, parentCons);
                }
            }
            return context;
        };

        /**
         * Creates context (a gui model from existing or new constrains)
         * @param {object} stage contains caller persistent information, such as archetypeModel and archetypeEditor
         * @param {object} cons Object for which to create the context. undefined if it does not exist yet
         * @param {object?} parentCons Matching constraint in the parent archetype, if available
         * @returns {object} context
         */
        handler.createContext = function (stage, cons, parentCons) {
        };

        /**
         * Displays the gui and populates it with the values of the context
         * @param {object} stage contains caller persistent information, such as archetypeModel and archetypeEditor
         * @param {object} context contains values to populate the gui
         * @param targetElement jquery element where the gui will be displayed
         */
        handler.show = function (stage, context, targetElement) {
        };

        /**
         * Optional function that can perform cleanup just before the panel is destroyed.
         * @param {object} stage contains caller persistent information, such as archetypeModel and archetypeEditor
         * @param {object} context contains values to populate the gui
         * @param targetElement jquery element where the gui is displayed
         */
        handler.hide = function (stage, context, targetElement) {
        };

        /** Updates context values from the current gui values
         * @param {object} stage contains caller persistent information, such as archetypeModel and archetypeEditor
         * @param context
         * @param targetElement
         */
        handler.updateContext = function (stage, context, targetElement) {
        };

        /**
         * Validates a context
         * @param {object} stage contains caller persistent information, such as archetypeModel and archetypeEditor
         * @param {context} context context to validate.
         * @param {AmUtils.Errors} errors Target for any validation errors
         */
        handler.validate = function (stage, context, errors) {
        };

        /**
         * Updates constraint values from the context values.
         *
         * @param {object} stage contains caller persistent information, such as archetypeModel and archetypeEditor
         * @param context contains values that are to be copied on the context
         * @param cons target constrains where the context values will be written
         */
        handler.updateConstraint = function (stage, context, cons) {
        };

    };


    ArchetypeEditor.CommonModule = {
        createCommonContext: function (stage, cons) {
            cons = cons || {};
            var context = {
                "panel_id": GuiUtils.generateId(),
                "type": cons.rm_type_name
            };
            return context;
        }
    };

    var CommonModule = function () {
        var self = this;
        self.name = "@common"; // stands for common module

        var CommonRmHandler = function () {
            var handler = this;
            ArchetypeEditor.Modules.RmHandler.call(handler);

        };
        AmUtils.extend(CommonRmHandler, ArchetypeEditor.Modules.RmHandler);


        var TopCommonHandler = function () {
            var handler = this;
            CommonRmHandler.call(handler);

            handler.createContext = function (stage, cons, parentCons) {
                cons = cons || {};
                var context = handler.createCommonContext(stage, cons);
                context.node_id = cons.node_id;
                context.type = "top";
                context.occurrences = (cons.occurrences) ? AmInterval.toContainedString(cons.occurrences) : "(*..*)";
                context.rmPath = stage.archetypeModel.getRmPath(cons).toString();

                if (parentCons) {
                    context.parent = handler.createContext(stage, parentCons);
                }

                return context;
            };

            handler.show = function (stage, context, targetElement) {
                GuiUtils.applyTemplate("properties/constraint-common|top", context, targetElement);
            };

            handler.updateContext = function (stage, context, targetElement) {
                var occStr = targetElement.find('#' + context.panel_id + "_occurrences").val();
                context.occurrences = occStr;
            };

            handler.validate = function (stage, context, errors) {
                var occ = errors.validate(
                    AmInterval.parseContainedString(context.occurrences, "MULTIPLICITY_INTERVAL"),
                    "Invalid occurrences format", "occurrences");
                //if (occ) {
                //    if (typeof occ.lower==="number" && typeof occ.upper==="number") {
                //        errors.validate(occ.lower<=occ.upper, "Lower bound cannot be larger than upper bound", "occurrences");
                //    }
                //}

            };

            handler.updateConstraint = function (stage, context, cons) {
                cons.occurrences =
                    AmInterval.parseContainedString(context.occurrences, "MULTIPLICITY_INTERVAL");
            };
        };
        AmUtils.extend(TopCommonHandler, CommonRmHandler);

        var MainCommonHandler = function () {
            var handler = this;
            CommonRmHandler.call(handler);

            handler.createContext = function (stage, cons, parentCons) {
                cons = cons || {};
                var context = handler.createCommonContext(stage, cons);
                var topHandler = stage.archetypeEditor.getRmTypeHandler("top", "@common");
                context.type = "main";
                context.top = topHandler.createContext(stage, cons, parentCons);
                context.cons = AOM.impoverishedClone(cons);
                var constraintHandler = stage.archetypeEditor.getRmTypeHandler(cons);
                if (constraintHandler) {
                    context.constraint = constraintHandler.createContext(stage, cons, parentCons);
                }

                return context;
            };

            handler.show = function (stage, context, targetElement) {
                GuiUtils.applyTemplate("properties/constraint-common|main", context, function (html) {
                    html = $(html);
                    targetElement.append(html);

                    var topHandler = stage.archetypeEditor.getRmTypeHandler("top", "@common");
                    topHandler.show(stage, context.top, targetElement.find('#' + context.top.panel_id));

                    var constraintHandler = stage.archetypeEditor.getRmTypeHandler(context.cons);
                    if (constraintHandler) {
                        constraintHandler.show(stage, context.constraint, targetElement.find('#' + context.constraint.panel_id));
                    }

//                    stage.archetypeEditor.applySubModules(stage, html, context);

                });
            };

            handler.updateContext = function (stage, context, targetElement) {
                stage.archetypeEditor.applySubModulesUpdateContext(stage, targetElement, context);
            };

            handler.validate = function (stage, context, errors) {
                var topHandler = stage.archetypeEditor.getRmTypeHandler("top", "@common");
                topHandler.validate(stage, context.top, errors);
                if (context.constraint) {
                    var constraintHandler = stage.archetypeEditor.getRmTypeHandler(context.cons);
                    constraintHandler.validate(stage, context.constraint, errors);
                }
            };

            handler.updateConstraint = function (stage, context, cons) {
                var topHandler = stage.archetypeEditor.getRmTypeHandler("top", "@common");
                topHandler.updateConstraint(stage, context.top, cons);
                if (context.constraint) {
                    var constraintHandler = stage.archetypeEditor.getRmTypeHandler(context.cons);
                    constraintHandler.updateConstraint(stage, context.constraint, cons);
                }
            };
        };
        AmUtils.extend(MainCommonHandler, CommonRmHandler);

        var ArchetypeSlotHandler = function () {
            var handler = this;
            CommonRmHandler.call(handler);


            function toContextAssertions(assertions) {
                var result = [];
                for (var i in assertions) {
                    var assertion = assertions[i];
                    var startIndex = assertion.string_expression.indexOf("{/") + 2;
                    var endIndex = assertion.string_expression.lastIndexOf("/}");
                    var pattern = assertion.string_expression.substring(startIndex, endIndex);
                    result.push(pattern);
                }
                return result;
            }

            function toConstraintsAssertions(assertions) {
                var result = [];
                for (var i in assertions) {
                    var pattern = assertions[i];
                    var consObj = {
                        "@type": "ASSERTION",
                        "string_expression": "",
                        "expression": {
                            "@type": "EXPR_BINARY_OPERATOR",
                            "type": "CONSTRAINT"
                        }
                    };
                    consObj.string_expression = "archetype_id/value matches {/" + pattern + "/}";
                    result.push(consObj);
                }
                return result;
            }

            var AssertionList = function (targetElement, candidates, assertions) {
                targetElement.empty();

                var context = {
                    panel_id: GuiUtils.generateId()
                };

                GuiUtils.applyTemplate("properties/constraint-common|ARCHETYPE_SLOT/assertionList", context, function (html) {
                    html = $(html);
                    targetElement.append(html);

                    function populateAssertionsSelect() {
                        assertionsSelect.empty();
                        for (var i in assertions) {
                            var assertion = assertions[i];
                            var option = $("<option>").attr('value', assertion).text(assertion);
                            assertionsSelect.append(option);
                        }
                    }

                    function updateAssertionsFromSelect() {
                        assertions.length = 0;
                        assertionsSelect.find("option").each(function () {
                            assertions.push($(this).val())
                        });
                    }

                    function removeSelectedOptions() {
                        assertionsSelect.find(":selected").remove();
                        updateAssertionsFromSelect();
                    }

                    function quoteRegexp(str) {
                        return (str + '').replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
                    }

                    function makePattern(archetypeId, useSpecializations) {
                        if (useSpecializations) {
                            var versionIndex = archetypeId.lastIndexOf('.v');
                            return quoteRegexp(archetypeId.substring(0, versionIndex))
                                + "(-[a-zA-Z0-9_]+)*"
                                + quoteRegexp(archetypeId.substring(versionIndex));

                        } else {
                            return quoteRegexp(archetypeId);
                        }

                    }

                    function addArchetypeAssertion() {

                        var dialogContext = {
                            panel_id: GuiUtils.generateId(),
                            candidates: []
                        };

                        var existingPatterns = AmUtils.listToSet(assertions);
                        for (var i in candidates) {
                            var candidate = candidates[i];
                            if (!existingPatterns[makePattern(candidate.archetypeId, true)]
                                || !existingPatterns[makePattern(candidate.archetypeId, false)]) {
                                dialogContext.candidates.push(candidate);
                            }
                        }

                        if (dialogContext.candidates.length === 0) return; // nothing to add

                        GuiUtils.applyTemplate("properties/constraint-common|ARCHETYPE_SLOT/addAssertionDialog", dialogContext, function (html) {
                            html = $(html);

                            var candidatesSelect = html.find('#' + dialogContext.panel_id + '_candidates');
                            var useSpecializationsCheck = html.find('#' + dialogContext.panel_id + '_specializations');

                            GuiUtils.openSimpleDialog(
                                {
                                    title: "Add assertions",
                                    buttons: {"add": "Add"},
                                    content: html,
                                    callback: function () {
                                        var checkedOptions = candidatesSelect.find(':selected');
                                        var useSpecializations = useSpecializationsCheck.prop('checked');
                                        for (var i = 0; i < checkedOptions.length; i++) {
                                            var checkedOption = $(checkedOptions[i]);
                                            var pattern = makePattern(checkedOption.val(), useSpecializations);
                                            if (!existingPatterns[pattern]) {
                                                assertions.push(pattern);
                                                existingPatterns[pattern] = true;
                                            }
                                        }
                                        populateAssertionsSelect();
                                    }
                                });
                        });

                    }

                    var assertionsSelect = html.find('#' + context.panel_id + "_list");
                    var addButton = html.find('#' + context.panel_id + "_add");
                    var removeButton = html.find('#' + context.panel_id + "_remove");

                    addButton.on('click', addArchetypeAssertion);
                    removeButton.on('click', removeSelectedOptions);

                    populateAssertionsSelect();
                });
            };

            handler.createContext = function (stage, cons, parentCons) {
                cons = cons || {};
                var context = handler.createCommonContext(stage, cons);
                context.includes = toContextAssertions(cons.includes);
                context.excludes = toContextAssertions(cons.excludes);
                context.candidateArchetypes = [];

                var archetypeInfos = stage.archetypeEditor.archetypeRepository.infoList;
                var referenceModel = stage.archetypeEditor.referenceModel;
                for (var i in archetypeInfos) {
                    var info = archetypeInfos[i];
                    if (!cons.rm_type_name || referenceModel.isSubclass(cons.rm_type_name, info.rmType)) {
                        context.candidateArchetypes.push(info)
                    }
                }

                return context;
            };

            handler.show = function (stage, context, targetElement) {

                GuiUtils.applyTemplate("properties/constraint-common|ARCHETYPE_SLOT", context, function (html) {
                    html = $(html);
                    targetElement.append(html);

                    var includesContainer = html.find('#' + context.panel_id + '_includes');
                    var excludesContainer = html.find('#' + context.panel_id + '_excludes');

                    var includesComponent = new AssertionList(includesContainer, context.candidateArchetypes, context.includes);
                    var excludesComponent = new AssertionList(excludesContainer, context.candidateArchetypes, context.excludes);

                });
            };

            handler.updateContext = function (stage, context, targetElement) {
            };

            handler.validate = function (stage, context, errors) {
            };

            handler.updateConstraint = function (stage, context, cons) {
                cons.includes = toConstraintsAssertions(context.includes);
                cons.excludes = toConstraintsAssertions(context.excludes);
            };
        };
        AmUtils.extend(ArchetypeSlotHandler, CommonRmHandler);


        var ArchetypeInternalRefHandler = function () {
            var handler = this;
            CommonRmHandler.call(handler);




            handler.createContext = function (stage, cons, parentCons) {
                cons = cons || {};
                var context = handler.createCommonContext(stage, cons);
                context.target_path = cons.target_path;
                return context;
            };

            handler.show = function (stage, context, targetElement) {
                GuiUtils.applyTemplate("properties/constraint-common|ARCHETYPE_INTERNAL_REF", context, function (html) {
                    html = $(html);
                    targetElement.append(html);
                });
            };

            handler.updateContext = function (stage, context, targetElement) {
            };

            handler.validate = function (stage, context, errors) {
            };

            handler.updateConstraint = function (stage, context, cons) {
                // read only, so no update allowed
            };
        };
        AmUtils.extend(ArchetypeInternalRefHandler, CommonRmHandler);


        self.handlers = {};
        self.handlers["top"] = new TopCommonHandler();
        self.handlers["main"] = new MainCommonHandler();
        self.handlers["ARCHETYPE_SLOT"] = new ArchetypeSlotHandler();
        self.handlers["ARCHETYPE_INTERNAL_REF"] = new ArchetypeInternalRefHandler();

    };

    ArchetypeEditor.addRmModule(new CommonModule());
}(ArchetypeEditor || {}) ) ;