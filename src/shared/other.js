// export const copyID = async (id) => {
//     // var content = document.getElementById(id);
//     // // const source = document.querySelector(id);
//     // console.log('123');
//     // document.getElementById(id)
//     // document.getElementById(id)
//     //     .onclick = function () {
//     //         let text = document.getElementById(id).value;
//     //         navigator.clipboard.writeText(text)
//     //         // navigator.clipboard.writeText('1234');

//     //     }
//     console.log(id);
//     var text = document.getElementById(id);
//     console.log(text);
//     // var copied = text.value;
//     // console.log(copied);

//     await navigator.clipboard.writeText(text);
//     // switch (id) {
//     //     case 'yj1':
//     //         navigator.clipboard.writeText('02802204018234');
//     //         break;
//     //     case 'yj':
//     //         navigator.clipboard.writeText('123211');
//     //         break;

//     // }
// }

function copyID(id) {
    console.log(id);
    var text = document.getElementById(id);
    console.log(text);
    // var copied = text.value;
    // console.log(copied);
    navigator.clipboard.writeText(text);
}
