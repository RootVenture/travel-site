import MobileMenu from "./modules/mobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import $ from "jquery";

var mobileMenu = new MobileMenu();

new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
