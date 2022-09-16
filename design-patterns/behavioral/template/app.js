"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var basic_plan_profile_configuration_1 = require("./basic-plan-profile-configuration");
var premium_plan_profile_configuration_1 = require("./premium-plan-profile-configuration");
var basicPlanConfig = new basic_plan_profile_configuration_1.BasicPlanProfileConfiguration();
var premiumPlanConfig = new premium_plan_profile_configuration_1.PremiumPlanProfileConfiguration();
// basicPlanConfig.start();
premiumPlanConfig.start();
