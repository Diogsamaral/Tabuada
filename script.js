function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if(num.value.length == 0) {
        window.alert('Digite um numero!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ' '
        for(let c = 1; c<=10; c++ ) {
            let item = document.createElement('option')
            item.text = `${n} * ${c} = ${n*c}`
            //essa abaixo linha serve apenas para backend
            item.value = `tab${c}`
            tab.appendChild(item)
        }

    }
}