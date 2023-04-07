/*? no js js needed from me */
const hasil = document.getElementById('hobyList')

let hobyList = []

const saveHoby = ()=>{
    const hobi = document.getElementById('inputan')
    if(hobi.value != ''){
        hobyList.push(hobi.value)
        hasil.textContent = hobyList
    }else{
        alert('Inputan tidak boleh kosong')
    }
    hobi.value = ''
}

const switchHoby = ()=>{
    const from = document.getElementById('from')
    const to = document.getElementById('to')
    if(from.value <= 0 && to.value <= 0){
        alert('Gk boleh kurang dari 1')
        from.value = ''
        to.value = ''
        return 0
    }

    let temp = hobyList[to.value-1]
    hobyList[to.value-1] = hobyList[from.value-1]
    hobyList[from.value-1] = temp
    
    hasil.textContent = hobyList
}