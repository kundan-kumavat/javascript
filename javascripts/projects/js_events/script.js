const key = document.querySelector('.key')
key.innerHTML = `
     <div class='color'>
      <table id='tab'>
       <tr>
         <th>Key</th>
         <th>key code</th>
         <th>Code</th>
       </tr>
      </table>
     </div>
    `

window.addEventListener('keydown', (e) => {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
         <td>${e.key === " " ? "Space" : e.key}</td>
         <td>${e.keyCode}</td>
         <td>${e.code}</td>
    `
    document.querySelector('#tab').appendChild(newRow)
})