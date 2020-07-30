document.addEventListener("click", function() {
  let e = '';
  e = e || window.event;
  let targetID = e.target.id || e.srcElement,
      text = targetID.textContent || targetID.innerText;

  let targetType = e.target.type || e.srcElement,
       textType = targetType.textContent || targetType.innerText;

    if (targetID.includes("color")) {
    document.getElementById(targetID).addEventListener("input", function() {
      let hexValue = document.getElementById(targetID).value;
      let number = targetID.slice(-1);
      let hexcodeID = "hexcode-" + number;
      let colorValue = document.getElementById(hexcodeID).innerHTML = hexValue;
    })
  } else if (targetID.includes("hexcode")) {
    document.getElementById("table").addEventListener("input", function() {
      let hexValue = document.getElementById(targetID).innerHTML;
      let number = targetID.slice(-1);
      let colorID = "color-" + number;
      let colorValue = document.getElementById(colorID).value = hexValue;  
    })
  }
}, false)


function updateColor(){
  // Get values inside of textarea and push into array
  let colorInput = document.getElementById("colorBrewer").value
  let colorArray = colorInput.split('\n')
  
  // Loop over array and put into id hexcode-# and color-#

  let n = 1;
  for (color of colorArray) {
    
    let hexcodeID = "hexcode-" + n;
    let colorValue = document.getElementById(hexcodeID).innerHTML = color;

    let colorID = "color-" + n;

    document.getElementById(colorID).value = color;
    n++
  }
}


function updateColorReverse(){
  // Get values inside of textarea and push into array
  let colorInput = document.getElementById("colorBrewer").value
  let colorArray = colorInput.split('\n').reverse()
  
  // Loop over array and put into id hexcode-# and color-#

  let n = 1;
  for (color of colorArray) {
    
    let hexcodeID = "hexcode-" + n;
    let colorValue = document.getElementById(hexcodeID).innerHTML = color;

    let colorID = "color-" + n;

    document.getElementById(colorID).value = color;
    n++
  }
}


function printCSS() {

  let columnNameValue = document.getElementById("column-name").value

  // add in first CSS code block
  let cssConstanctCodeBlock = `#layer{
  polygon-fill: #F1E6F1;
  polygon-opacity: 0.7;
  line-color: #000000;
  line-width: 0.2;
  line-opacity: 0.7;
}`

  document.getElementById("cssCodeBlock").value = cssConstanctCodeBlock

  for (let i = 1; i <=5; i++) {
    let breakpointValue = document.getElementById("breakpoint-" + i).innerHTML
    let hexcodeValue = document.getElementById("hexcode-" + i).innerHTML
    
    let cssLayerCodeBlock = 
    `
#layer [ ${columnNameValue} <= ${breakpointValue}] {
  polygon-fill: ${hexcodeValue};
}`
    let existingCSSOutupt = document.getElementById("cssCodeBlock").value
   
    document.getElementById("cssCodeBlock").value = existingCSSOutupt + cssLayerCodeBlock
  }
}


function printHTML() {
  

  // ul first
  let beginUL = `<ul>

  `
  document.getElementById("htmlCodeBlock").value = beginUL

  // then loop
  for (let i = 1; i <= 5; i++) {
    let breakpointValue = document.getElementById("breakpoint-" + i).innerHTML
    let hexcodeValue = document.getElementById("hexcode-" + i).innerHTML
    let labelValue = document.getElementById("label-" + i).innerHTML

    let htmlCodeBlock = `
  <li class="Legend-categoryListItem u-flex u-alignCenter">
        
    <span style="opacity:1; border:1px solid #ffffff; background: ${hexcodeValue}; height:20px; width:20px; display:inline-block"></span>
        
    <p class="Legend-categoryTitle CDB-Text CDB-Size-small u-upperCase u-ellipsis" title="${breakpointValue}">${labelValue}</p>
      
  </li>


`
    
    let existingHTMLOutput = document.getElementById("htmlCodeBlock").value

    document.getElementById("htmlCodeBlock").value = existingHTMLOutput + htmlCodeBlock
  }

  // then close with /ul
  let finalHTMLOutput = document.getElementById("htmlCodeBlock").value

  document.getElementById("htmlCodeBlock").value = finalHTMLOutput + `</ul>`
}