class ElementUtil {
  doGetText(element) {
    element.waitForDisplayed();
    return element.getText();
  }
 
   runClickInBrowser = function(argument) { 
    argument.click();
  };
 
  doGetAttribute(element,attrName){
    element.waitForDisplayed();
    return element.getAttribute(attrName);

  }
}

module.exports = new ElementUtil();
