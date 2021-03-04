(function(){
    const s = 6;
const e = 267;
const categorylist = ['一','二','三','四','五','六','七','八','九','十','―'];
const titlelist = ['1','2','3','4','5','6','7','8','9','0','l'];
const optionslist = ['A','B','C','D','E','F','G','H'];
let category = null;

const texts = Array.from(document.querySelectorAll('p'));
const finaltexts = texts.slice(s,e).filter(it => it.innerText.trim()).map(it => it.innerText.replaceAll('','').replaceAll('','').replaceAll('','').replaceAll('','').trim());
const textslist = [];
let textItem = {};
finaltexts.forEach(it => {
    if(categorylist.indexOf(it.charAt(1)) > -1) {
        if (textItem.options && textItem.options.length > 0) {
            textslist.push({...textItem});
        }
        textItem = {
            category: it
        };
    }
    if (titlelist.indexOf(it.charAt(0)) > -1) {
        if (textItem.options && textItem.options.length > 0) {
            textslist.push({...textItem});
        }
        textItem.title = it;
        textItem.mode = it.indexOf('多选') > -1 ? 'checkbox': 'radio';
        textItem.options = [];
    }
    if (optionslist.indexOf(it.charAt(0)) > -1) {
        textItem.options.push(...it.split(' ').filter(itt => itt).map(itt => ({label:itt,value: itt})));
    }
});

console.log("finaltexts ...",JSON.stringify(textslist));


const textchilds = Array.from(document.querySelectorAll('tr'));
const childlist = [];


textchilds.slice(1).forEach(it => {
    if(categorylist.indexOf(it.innerText.charAt(0)) > -1) {
        category = it.querySelectorAll('td')[1].innerText;
    }
    if (titlelist.indexOf(it.innerText.charAt(0)) > -1) {
        const item = {
            category: category,
            title: it.querySelectorAll('td')[1].innerText,
            options: [{label: '非常不同意', value: '1'},{label: '不同意', value: '2'},{label: '无所谓', value: '3'},{label: '同意', value: '4'},{label: '非常同意', value: '5'}],
            mode: 'radio'
        }
        childlist.push(item);
    }
});

console.log("textchilds ...",JSON.stringify(childlist));

})()