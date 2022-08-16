let textarea = document.querySelector("textarea");
let upperbtn = document.getElementById("upper-case");
let lowerbtn = document.getElementById("lower-case");
let properbtn = document.getElementById("proper-case");
let sentencebtn = document.getElementById("sentence-case");
let downloadbtn = document.getElementById("save-text-file");

upperbtn.addEventListener("click",function() {
    texts = textarea.value;
    texts = texts.toUpperCase();
    textarea.value = texts;
    }
);

lowerbtn.addEventListener("click",function() {
        texts = textarea.value;
        texts = texts.toLowerCase();
        textarea.value = texts;
    }
);

properbtn.addEventListener("click",function() {
        texts = textarea.value;
        texts = texts.toLowerCase();
        let arr = texts.split(" ");
        for (let i = 0; i < arr.length; i++) {
            let tmp = arr[i].trim();
            arr[i] = tmp.slice(0,1).toUpperCase() + tmp.slice(1);
        }
        texts = arr.join(" ");
        textarea.value = texts;
    }
);

sentencebtn.addEventListener("click",function() {
        texts = textarea.value;
        texts = texts.toLowerCase();
        let arr = texts.split(". ");
        for (let i = 0; i < arr.length; i++) {
            let tmp = arr[i].trim();
            arr[i] = tmp.slice(0,1).toUpperCase() + tmp.slice(1);
        }
        texts = arr.join(". ");
        console.log(texts);
        textarea.value = texts;
    }
);

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

downloadbtn.addEventListener("click",function() {
    // Start file download.
    download("text.txt", textarea.value);
    }
);


