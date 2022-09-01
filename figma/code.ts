/// <reference types="@figma/plugin-typings" />
// Colors
let colorStylesId = [];
let colorStylesValues = [];
let opacityStylesValues = []

figma.getLocalPaintStyles().forEach(sytleId => colorStylesId.push(sytleId.id))

colorStylesId.forEach(id => {
  return colorStylesValues.push(figma.getStyleById(id).paints[0].color),
  opacityStylesValues.push(figma.getStyleById(id).paints[0].opacity);
})

// Texts
let textStylesId = [];
let textStylesValuesFamily = [] 
let textStylesValuesStyle = [] 
let textStylesValuesWeight = [] 
let textStylesValuesSize = [] 
let textStylesValuesLetterUnit = [] 
let textStylesValuesLetterValue = [] 
let textStylesValuesCase = [] 
let textStylesValuesDecoration = [] 
let textStylesValuesLineUnit = [] 
let textStylesValuesLineValue = [] 

figma.getLocalTextStyles().forEach(sytleId => textStylesId.push(sytleId.id))

textStylesId.forEach(id => {
  return textStylesValuesFamily.push(figma.getStyleById(id).fontName.family),
    textStylesValuesStyle.push(figma.getStyleById(id).fontName.style),
    textStylesValuesSize.push(figma.getStyleById(id).fontSize),
    textStylesValuesLetterUnit.push(figma.getStyleById(id).letterSpacing.unit),
    textStylesValuesLetterValue.push(figma.getStyleById(id).letterSpacing.value),
    textStylesValuesCase.push(figma.getStyleById(id).textCase),
    textStylesValuesDecoration.push(figma.getStyleById(id).textDecoration),
    textStylesValuesLineUnit.push(figma.getStyleById(id).lineHeight.unit),
    textStylesValuesLineValue.push(figma.getStyleById(id).lineHeight.value)
})

let countStyles = [];

figma.showUI(__html__);
figma.ui.resize(320, 220);
figma.ui.onmessage = msg => {
  if (msg.type === 'apply-styles') {
      function traverse(node: any) {
        if ("children" in node) {
            for (const child of node.children) {
              traverse(child)
              console.log(child)
              
              if (msg.color === 'Color') {
                if(child.visible === true) {
                if ((child.fills && child.fills.length > 0) && (child.fills[0].type && child.fills[0].type === 'SOLID' && child.fills[0].visible === true)) {
                  if (JSON.stringify(colorStylesValues).includes(JSON.stringify(child.fills[0].color)) 
                  && JSON.stringify(opacityStylesValues).includes(JSON.stringify(child.fills[0].opacity))) {
                   
                    let styleId = '';
                    figma.getLocalPaintStyles().forEach(item => {
                      if (JSON.stringify(item.paints[0].color) === JSON.stringify(child.fills[0].color) 
                      && JSON.stringify(item.paints[0].opacity) === JSON.stringify(child.fills[0].opacity)) {
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
              if (msg.text === 'Text') {
                if(child.visible === true) {
                if (child.fontName) {
                    if (JSON.stringify(textStylesValuesLineUnit).includes("AUTO")) {
                      (JSON.stringify(textStylesValuesFamily).includes(JSON.stringify(child.fontName.family)))
                    && (JSON.stringify(textStylesValuesStyle).includes(JSON.stringify(child.fontName.style)))
                    && (JSON.stringify(textStylesValuesSize).includes(JSON.stringify(child.fontSize)))
                    && (JSON.stringify(textStylesValuesCase).includes(JSON.stringify(child.textCase)))
                    && (JSON.stringify(textStylesValuesDecoration).includes(JSON.stringify(child.textDecoration)))
                    && (JSON.stringify(textStylesValuesLetterUnit).includes(JSON.stringify(child.letterSpacing.unit)))
                    && (JSON.stringify(textStylesValuesLetterValue).includes(JSON.stringify(child.letterSpacing.value)))
                    && (JSON.stringify(textStylesValuesLineUnit).includes(JSON.stringify(child.lineHeight.unit)))
                      let textStyleId = '';
                      figma.getLocalTextStyles().forEach(item => {
                        if (
                          (JSON.stringify(item.fontName.family) === JSON.stringify(child.fontName.family))
                          && (JSON.stringify(item.fontName.style) === JSON.stringify(child.fontName.style))
                          && (JSON.stringify(item.fontSize) === JSON.stringify(child.fontSize))
                          && (JSON.stringify(item.textCase) === JSON.stringify(child.textCase))
                          && (JSON.stringify(item.textDecoration) === JSON.stringify(child.textDecoration))
                          && (JSON.stringify(item.letterSpacing.unit) === JSON.stringify(child.letterSpacing.unit))
                          && (JSON.stringify(item.letterSpacing.value) === JSON.stringify(child.letterSpacing.value))
                          && (JSON.stringify(item.lineHeight.unit) === JSON.stringify(child.lineHeight.unit))
                        ) {
                          countStyles.push(item.id)
                          textStyleId = item.id
                          return textStyleId
                        }
                      })
                      child.textStyleId = textStyleId;
                    } else {
                       (JSON.stringify(textStylesValuesFamily).includes(JSON.stringify(child.fontName.family)))
                    && (JSON.stringify(textStylesValuesStyle).includes(JSON.stringify(child.fontName.style)))
                    && (JSON.stringify(textStylesValuesSize).includes(JSON.stringify(child.fontSize)))
                    && (JSON.stringify(textStylesValuesCase).includes(JSON.stringify(child.textCase)))
                    && (JSON.stringify(textStylesValuesDecoration).includes(JSON.stringify(child.textDecoration)))
                    && (JSON.stringify(textStylesValuesLetterUnit).includes(JSON.stringify(child.letterSpacing.unit)))
                    && (JSON.stringify(textStylesValuesLetterValue).includes(JSON.stringify(child.letterSpacing.value)))
                    && (JSON.stringify(textStylesValuesLineValue).includes(JSON.stringify(child.lineHeight.value)))
                    && (JSON.stringify(textStylesValuesLineUnit).includes(JSON.stringify(child.lineHeight.unit)))
                      
                      let textStyleId = '';
                      figma.getLocalTextStyles().forEach(item => {
                        if (
                          (JSON.stringify(item.fontName.family) === JSON.stringify(child.fontName.family))
                          && (JSON.stringify(item.fontName.style) === JSON.stringify(child.fontName.style))
                          && (JSON.stringify(item.fontSize) === JSON.stringify(child.fontSize))
                          && (JSON.stringify(item.textCase) === JSON.stringify(child.textCase))
                          && (JSON.stringify(item.textDecoration) === JSON.stringify(child.textDecoration))
                          && (JSON.stringify(item.letterSpacing.unit) === JSON.stringify(child.letterSpacing.unit))
                          && (JSON.stringify(item.letterSpacing.value) === JSON.stringify(child.letterSpacing.value))
                          && (JSON.stringify(item.lineHeight.unit) === JSON.stringify(child.lineHeight.unit))
                          && (JSON.stringify(item.lineHeight.value) === JSON.stringify(child.lineHeight.value))
                        ) {
                          countStyles.push(item.id)
                          textStyleId = item.id
                          return textStyleId
                        }
                      })
                    }
                  
                }
                }
            }
          }
        }
      }
    traverse(figma.root) // start the traversal at the root
    if (msg.color === 'Color') {
      figma.notify(countStyles.length > 0 ? `${countStyles.length} styles applied` : 'No style applied');
    }
    if (msg.text === 'Text') {
      figma.notify(countStyles.length > 0 ? `${countStyles.length} text styles applied` : 'No text style applied');
    }
  }
  figma.closePlugin();
};
