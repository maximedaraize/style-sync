let colorStylesId = [];
let colorStylesValues = []
let countStyles = [];
figma.getLocalPaintStyles().forEach(sytleId => colorStylesId.push(sytleId.id))

colorStylesId.forEach(id => {
  return colorStylesValues.push(figma.getStyleById(id).paints[0].color);
  // return colorStylesValues.push(figma.getStyleById(id).paints[0].color)
})

console.log('#0', figma.getLocalPaintStyles());

console.log('#1', colorStylesId);
console.log(colorStylesValues)

// This plugin will open a window to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.

// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (see documentation).

// This shows the HTML page in "ui.html".
figma.showUI(__html__);

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = msg => {
  // One way of distinguishing between different types of messages sent from
  // your HTML page is to use an object with a "type" property like this.
  if (msg.type === 'apply-styles') {
    if (msg.styleCategory.color === true) {
      function traverse(node) {
        if ("children" in node) {
          if (node.type != "INSTANCE") {
            for (const child of node.children) {
              traverse(child)
              if (!child.name.match(/Page/)) { //return all node expect Page
                console.log('child', child)
                console.log('#3', child.fills[0].color);
                console.log('#4', colorStylesValues[0]);
                console.log('#5', JSON.stringify(colorStylesValues).includes(JSON.stringify(child.fills[0].color)));
                console.log('$$$', JSON.stringify(child.fills[0].color))
                if (child.fillStyleId === '' && JSON.stringify(colorStylesValues).includes(JSON.stringify(child.fills[0].color))) {           
                  let styleId = '';
                  figma.getLocalPaintStyles().forEach(item => {
                    console.log('$$$', item)
                    if (JSON.stringify(item.paints[0].color) === JSON.stringify(child.fills[0].color)) {
                      console.log('@@@', item.id)

                      countStyles.push(item.id)
                       styleId = item.id
                      return styleId
                    }
                  })
                  child.fillStyleId = styleId;
                }
              }
            }
          }
        }
      }
      traverse(figma.root) // start the traversal at the root
      figma.notify(countStyles.length > 0 ? `${countStyles.length} styles applied` : 'No styles applied');
    }
  }
  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  figma.closePlugin();
};
