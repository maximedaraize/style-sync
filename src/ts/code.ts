let colorStylesId = [];
let colorStylesValues = [] 
let countStyles = [];
figma.getLocalPaintStyles().forEach(sytleId => colorStylesId.push(sytleId.id))

colorStylesId.forEach(id => {
  return colorStylesValues.push(figma.getStyleById(id).paints[0].color);
})

figma.showUI(__html__);
figma.ui.onmessage = msg => {
  if (msg.type === 'apply-styles') {
    if (msg.styleCategory.color === true) {
      function traverse(node: any) {
        if ("children" in node) {
          if (node.type != "INSTANCE") {
            for (const child of node.children) {
              traverse(child)
                if (child.fillStyleId === '' && JSON.stringify(colorStylesValues).includes(JSON.stringify(child.fills[0].color))) {           
                  let styleId = '';
                  figma.getLocalPaintStyles().forEach(item => {
                    if (JSON.stringify(item.paints[0].color) === JSON.stringify(child.fills[0].color)) {
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
      traverse(figma.root) // start the traversal at the root
      figma.notify(countStyles.length > 0 ? `${countStyles.length} styles applied` : 'No style applied');
    }
  }

  figma.closePlugin();
};
