function testInputtk(){
    const soP = parseInt(document.querySelector("#so-p").value);
    const soAlpha = parseInt(document.querySelector("#so-alpha").value);
    const soA = parseInt(document.querySelector("#so-a").value);
    if(isNaN(soA) || isNaN(soAlpha) || isNaN(soP)){
        console.log(alert("Vui lòng nhập đủ dữ liệu!!"));
    }
}

function testInputky(){
    const soK = parseInt(document.querySelector("#k").value);
    const x = parseInt(document.querySelector("#brx").value);
    if(isNaN(soK) || isNaN(x)){
        console.log(alert("Vui lòng nhập đủ dữ liệu!!"));
    }
}

function isprime(nump) {
    if(nump < 2) return false;
    for(let i = 2; i <= Math.sqrt(nump); i++){
        if(nump % i === 0){
            return false;
        }
    }
    return true;
};

function checkP(nump){
    if(!isprime(nump)){
        console.log(alert("Số P phải là SNT !!!"));
    }
};

function chuyenNhiPhan(num){
    let arr = [];
    let tmp = 0;
    while(num > 0){
        tmp = num % 2;
        num = Math.floor(num / 2);
        arr.push(tmp);
    }
    return arr;
};


function binhPhuongVoiNhan(num, x, y) {
    const tinh = chuyenNhiPhan(num);
    let p = 1;
    for(let i = tinh.length - 1; i >= 0; i--){
        if(tinh[i] == 1){
            p = p * p;
            p = p % y;
            p = p * x;
            p = p % y;
        }
        else{
            p = p * p;
            p = p % y;
        }
    }
    return p;
};




function beta(){
    const soP = parseInt(document.querySelector("#so-p").value);
    const soA = parseInt(document.querySelector("#so-a").value);
    const soAlpha = parseInt(document.querySelector("#so-alpha").value);
    console.log(testInputtk());
    console.log(checkP(soP));
    var result = binhPhuongVoiNhan(soA, soAlpha, soP);
    
    document.querySelector("#beta").innerHTML ="Beta: " +  result;
    document.querySelector("#kpub").innerHTML = "Khoa pulic: {" + soP + ";  " + soAlpha + ";  " + result + "}";
    document.querySelector("#kpr").innerHTML = "Khoa private: **********";
    
};

function oClit (k, p) {
    let i = 2;
    let r = [];
    r.push(p);
    r.push(k);
    r[2] = p - k*(Math.floor(p / k));
    const t = [];
    let s = [];
    t[0] = 0;
    t[1] = 1;
    s[0] = 1;
    s[1] = 0;
    let q = [];
    q[1] = Math.floor(r[0] / r[0 + 1]);
    q[2] = Math.floor(r[1] / r[1 + 1]);
    while(r[i] > 1){       
        r[i] = r[i - 2] - r[i - 1] *(Math.floor(r[i - 2] / r[i - 1]));
        r[i + 1] = r[i - 1] - r[i] *(Math.floor(r[i - 1] / r[i]));
        q[i + 1] = Math.floor(r[i ] / r[i + 1]);
        s[i] = s[i - 2] - q[i - 1]*  s[i - 1];
        t[i] = t[i - 2] - q[i - 1]* t[i - 1];
        i++;
    }
    t[i] = t[i - 2] - q[i - 1]* t[i - 1];
    if(t[i] < 0){
        t[i] = t[i] + p;
    }
    return t[i];
};

// function oClit (k, p) {
//     let ri = p;
//     let rin = k;
//     let tst = 0, ts = 1;
//     let tin;
//     let tmp;
//     let gtmp;
//     while(rin > 1){
//         tin = tst - ts*Math.floor(ri / rin);
//          tmp = rin;
//         rin = ri - rin*Math.floor(ri / rin);
//         ri = tmp;
//         gtmp = ts;
//         ts = tin;
//         tst = gtmp;
//     }
//     if(tin < 0){
//         tin = tin + p;
//     }
//     return tin;
// };

// function gamMal(){
//     const soP = parseInt(document.querySelector("#so-p").value);
//     const soAlpha = parseInt(document.querySelector("#so-alpha").value);
//     const soK = document.querySelector("#k").value;
//     const result = binhPhuongVoiNhan(soK, soAlpha, soP);
//     document.querySelector("#gama").innerHTML = "gama: " + result;
// };

function xicmal() {  
    const soP = parseInt(document.querySelector("#so-p").value);
    const soAlpha = parseInt(document.querySelector("#so-alpha").value);
    const soA = parseInt(document.querySelector("#so-a").value);
    const soK = parseInt(document.querySelector("#k").value);
    const x = parseInt(document.querySelector("#brx").value);

    console.log(checkP(soP));
    console.log(testInputky());
    
    const res = oClit(soK, (soP - 1));
    const gama = binhPhuongVoiNhan(soK, soAlpha, soP);
    const res2 = x - soA * gama;
    let result = res2*res % (soP - 1);
    if(result < 0){
        result = result + (soP - 1);
    }
    document.querySelector("#gama").innerHTML = "Gamal: " + gama;
    document.querySelector("#xicma").innerHTML = "Xicma: " + result;
};

function check() {
    const soP = parseInt(document.querySelector("#so-p").value);
    const soAlpha = parseInt(document.querySelector("#so-alpha").value);
    const soA = parseInt(document.querySelector("#so-a").value);
    const soK = parseInt(document.querySelector("#k").value);
    const x = parseInt(document.querySelector("#brx").value);



    const res = oClit(soK, (soP - 1));
    const gama = binhPhuongVoiNhan(soK, soAlpha, soP);
    const tinh = x - soA * gama;
    let xicma = tinh*res % (soP - 1);
    if(xicma < 0){
        xicma = xicma + (soP - 1);
    }
    var beta = binhPhuongVoiNhan(soA, soAlpha, soP);
    console.log(beta);
    const kq = binhPhuongVoiNhan(gama, beta, soP);
    console.log(kq);
    const kq2 =  binhPhuongVoiNhan(xicma, gama, soP);
    console.log(xicma);
    let endres = (kq * kq2) % soP;
    let endres2 = binhPhuongVoiNhan(x, soAlpha, soP);
    console.log(endres);
    console.log(endres2);
    var Result = true;
    if(endres != endres2){
        Result = false;
    }
        document.querySelector("#inbeta").innerHTML ="Beta: " + beta;
        document.querySelector("#ingama").innerHTML ="Gamal: " + gama;
        document.querySelector("#alpha").innerHTML = "Alpha: " + soAlpha;
        document.querySelector("#inxicma").innerHTML ="Xicma: " + xicma;
        
    if(Result){
        document.querySelector("#chk").innerHTML = "Văn bản chưa bị sửa đổi!";
    }
    else{
        document.querySelector("#chk").innerHTML = "Văn bản đã bị sửa đổi!!!";
    }
};

const btntk = document.querySelector("#btn-taok");
const btnKy = document.querySelector("#btn-ky");
const btncheck = document.querySelector("#btn-check");

const taok = document.querySelector("#tao-khoa");
const ky = document.querySelector("#chu-ky");
const ktra = document.querySelector("#kiem-tra");

btnKy.onclick = function(){
    taok.classList.add("an");
    ky.classList.add("show");
    ktra.classList.remove("show");
};

btncheck.onclick = function(){
    taok.classList.add("an");
    ky.classList.remove("show");
    ktra.classList.add("show");
};

btntk.onclick = function(){
    taok.classList.remove("an");
    ky.classList.remove("show");
    ktra.classList.remove("show");
};



const hienThi = document.querySelector("#res");
const an = document.querySelector("#res2");

hienThi.onclick = function () {
    const soA = parseInt(document.querySelector("#so-a").value);
    document.querySelector("#kpr").innerHTML = "Khoa private: " + soA;
};

an.onclick = function () {
    document.querySelector("#kpr").innerHTML = "Khoa private: ********";
};

