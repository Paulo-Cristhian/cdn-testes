var svg = document.getElementsByTagName('svg')

for (let i = 0; i < svg.length; i++) {
    svg[i].setAttribute("id", [i]);
    svg[i].style.cursor = 'copy';

    document.getElementById(svg[i].id).onclick = function () {
        var copyTextarea = document.createElement("textarea");
        copyTextarea.style.position = "fixed";
        copyTextarea.style.opacity = "0";
        var s = new XMLSerializer();
        var str = s.serializeToString(svg[i]);
        copyTextarea.textContent = str;
        document.body.appendChild(copyTextarea);
        copyTextarea.select();
        document.execCommand("copy");
        document.body.removeChild(copyTextarea);
        launch_toast()
    }
}

function launch_toast() {
    var x = document.getElementById("toast")
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 5000);
}

var codeEditor = document.getElementsByClassName('codeEditor');
var lineCounter = document.getElementsByClassName('lineCounter');

for (let i = 0; i < lineCounter.length; i++) {
    codeEditor[i].setAttribute("id", 'codeEditor' + [i]);
    lineCounter[i].setAttribute("id", 'lineCounter' + [i]);

    var lineCountCache = 0;
    function line_counter() {
        var lineCount = codeEditor[i].value.split('\n').length;
        var outarr = new Array();
        if (lineCountCache != lineCount) {
            for (var x = 0; x < lineCount; x++) {
                let codeh = document.querySelector(`#` + codeEditor[i].id)
                let lineh = document.querySelector(`#` + lineCounter[i].id)
                outarr[x] = (x + 1) + '.';
                codeh.style.height = ((x + 1) * 20.20) + 'px'
                lineh.style.height = ((x + 1) * 20.20) + 'px'
            }
            lineCounter[i].value = outarr.join('\n');
        }
        lineCountCache = lineCount;
    }
    line_counter();
}

/* W3.JS 1.03 December 2017 by w3schools.com */
"use strict";
var w3 = {};
w3.hide = function (sel) {
    w3.hideElements(w3.getElements(sel));
};
w3.hideElements = function (elements) {
    var i, l = elements.length;
    for (i = 0; i < l; i++) {
        w3.hideElement(elements[i]);
    }
};
w3.hideElement = function (element) {
    w3.styleElement(element, "display", "none");
};
w3.show = function (sel, a) {
    var elements = w3.getElements(sel);
    if (a) { w3.hideElements(elements); }
    w3.showElements(elements);
};
w3.showElements = function (elements) {
    var i, l = elements.length;
    for (i = 0; i < l; i++) {
        w3.showElement(elements[i]);
    }
};
w3.showElement = function (element) {
    w3.styleElement(element, "display", "block");
};
w3.addStyle = function (sel, prop, val) {
    w3.styleElements(w3.getElements(sel), prop, val);
};
w3.styleElements = function (elements, prop, val) {
    var i, l = elements.length;
    for (i = 0; i < l; i++) {
        w3.styleElement(elements[i], prop, val);
    }
};
w3.styleElement = function (element, prop, val) {
    element.style.setProperty(prop, val);
};
w3.toggleShow = function (sel) {
    var i, x = w3.getElements(sel), l = x.length;
    for (i = 0; i < l; i++) {
        if (x[i].style.display == "none") {
            w3.styleElement(x[i], "display", "block");
        } else {
            w3.styleElement(x[i], "display", "none");
        }
    }
};
w3.addClass = function (sel, name) {
    w3.addClassElements(w3.getElements(sel), name);
};
w3.addClassElements = function (elements, name) {
    var i, l = elements.length;
    for (i = 0; i < l; i++) {
        w3.addClassElement(elements[i], name);
    }
};
w3.addClassElement = function (element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
};
w3.removeClass = function (sel, name) {
    w3.removeClassElements(w3.getElements(sel), name);
};
w3.removeClassElements = function (elements, name) {
    var i, l = elements.length, arr1, arr2, j;
    for (i = 0; i < l; i++) {
        w3.removeClassElement(elements[i], name);
    }
};
w3.removeClassElement = function (element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
};
w3.toggleClass = function (sel, c1, c2) {
    w3.toggleClassElements(w3.getElements(sel), c1, c2);
};
w3.toggleClassElements = function (elements, c1, c2) {
    var i, l = elements.length;
    for (i = 0; i < l; i++) {
        w3.toggleClassElement(elements[i], c1, c2);
    }
};
w3.toggleClassElement = function (element, c1, c2) {
    var t1, t2, t1Arr, t2Arr, j, arr, allPresent;
    t1 = (c1 || "");
    t2 = (c2 || "");
    t1Arr = t1.split(" ");
    t2Arr = t2.split(" ");
    arr = element.className.split(" ");
    if (t2Arr.length == 0) {
        allPresent = true;
        for (j = 0; j < t1Arr.length; j++) {
            if (arr.indexOf(t1Arr[j]) == -1) { allPresent = false; }
        }
        if (allPresent) {
            w3.removeClassElement(element, t1);
        } else {
            w3.addClassElement(element, t1);
        }
    } else {
        allPresent = true;
        for (j = 0; j < t1Arr.length; j++) {
            if (arr.indexOf(t1Arr[j]) == -1) { allPresent = false; }
        }
        if (allPresent) {
            w3.removeClassElement(element, t1);
            w3.addClassElement(element, t2);
        } else {
            w3.removeClassElement(element, t2);
            w3.addClassElement(element, t1);
        }
    }
};
w3.getElements = function (id) {
    if (typeof id == "object") {
        return [id];
    } else {
        return document.querySelectorAll(id);
    }
};
w3.filterHTML = function (id, sel, filter) {
    var a, b, c, i, ii, iii, hit;
    a = w3.getElements(id);
    for (i = 0; i < a.length; i++) {
        b = w3.getElements(sel);
        for (ii = 0; ii < b.length; ii++) {
            hit = 0;
            if (b[ii].innerHTML.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
                hit = 1;
            }
            c = b[ii].getElementsByTagName("*");
            for (iii = 0; iii < c.length; iii++) {
                if (c[iii].innerHTML.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
                    hit = 1;
                }
            }
            if (hit == 1) {
                b[ii].style.display = "";
            } else {
                b[ii].style.display = "none";
            }
        }
    }
};
w3.sortHTML = function (id, sel, sortvalue) {
    var a, b, i, ii, y, bytt, v1, v2, cc, j;
    a = w3.getElements(id);
    for (i = 0; i < a.length; i++) {
        for (j = 0; j < 2; j++) {
            cc = 0;
            y = 1;
            while (y == 1) {
                y = 0;
                b = a[i].querySelectorAll(sel);
                for (ii = 0; ii < (b.length - 1); ii++) {
                    bytt = 0;
                    if (sortvalue) {
                        v1 = b[ii].querySelector(sortvalue).innerHTML.toLowerCase();
                        v2 = b[ii + 1].querySelector(sortvalue).innerHTML.toLowerCase();
                    } else {
                        v1 = b[ii].innerHTML.toLowerCase();
                        v2 = b[ii + 1].innerHTML.toLowerCase();
                    }
                    if ((j == 0 && (v1 > v2)) || (j == 1 && (v1 < v2))) {
                        bytt = 1;
                        break;
                    }
                }
                if (bytt == 1) {
                    b[ii].parentNode.insertBefore(b[ii + 1], b[ii]);
                    y = 1;
                    cc++;
                }
            }
            if (cc > 0) { break; }
        }
    }
};
w3.slideshow = function (sel, ms, func) {
    var i, ss, x = w3.getElements(sel), l = x.length;
    ss = {};
    ss.current = 1;
    ss.x = x;
    ss.ondisplaychange = func;
    if (!isNaN(ms) || ms == 0) {
        ss.milliseconds = ms;
    } else {
        ss.milliseconds = 1000;
    }
    ss.start = function () {
        ss.display(ss.current)
        if (ss.ondisplaychange) { ss.ondisplaychange(); }
        if (ss.milliseconds > 0) {
            window.clearTimeout(ss.timeout);
            ss.timeout = window.setTimeout(ss.next, ss.milliseconds);
        }
    };
    ss.next = function () {
        ss.current += 1;
        if (ss.current > ss.x.length) { ss.current = 1; }
        ss.start();
    };
    ss.previous = function () {
        ss.current -= 1;
        if (ss.current < 1) { ss.current = ss.x.length; }
        ss.start();
    };
    ss.display = function (n) {
        w3.styleElements(ss.x, "display", "none");
        w3.styleElement(ss.x[n - 1], "display", "block");
    }
    ss.start();
    return ss;
};
w3.includeHTML = function (cb) {
    var z, i, elmnt, file, xhttp;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    elmnt.removeAttribute("w3-include-html");
                    w3.includeHTML(cb);
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            return;
        }
    }
    if (cb) cb();
};
w3.getHttpData = function (file, func) {
    w3.http(file, function () {
        if (this.readyState == 4 && this.status == 200) {
            func(this.responseText);
        }
    });
};
w3.getHttpObject = function (file, func) {
    w3.http(file, function () {
        if (this.readyState == 4 && this.status == 200) {
            func(JSON.parse(this.responseText));
        }
    });
};
w3.displayHttp = function (id, file) {
    w3.http(file, function () {
        if (this.readyState == 4 && this.status == 200) {
            w3.displayObject(id, JSON.parse(this.responseText));
        }
    });
};
w3.http = function (target, readyfunc, xml, method) {
    var httpObj;
    if (!method) { method = "GET"; }
    if (window.XMLHttpRequest) {
        httpObj = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        httpObj = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if (httpObj) {
        if (readyfunc) { httpObj.onreadystatechange = readyfunc; }
        httpObj.open(method, target, true);
        httpObj.send(xml);
    }
};
w3.getElementsByAttribute = function (x, att) {
    var arr = [], arrCount = -1, i, l, y = x.getElementsByTagName("*"), z = att.toUpperCase();
    l = y.length;
    for (i = -1; i < l; i += 1) {
        if (i == -1) { y[i] = x; }
        if (y[i].getAttribute(z) !== null) { arrCount += 1; arr[arrCount] = y[i]; }
    }
    return arr;
};
w3.dataObject = {},
    w3.displayObject = function (id, data) {
        var htmlObj, htmlTemplate, html, arr = [], a, l, rowClone, x, j, i, ii, cc, repeat, repeatObj, repeatX = "";
        htmlObj = document.getElementById(id);
        htmlTemplate = init_template(id, htmlObj);
        html = htmlTemplate.cloneNode(true);
        arr = w3.getElementsByAttribute(html, "w3-repeat");
        l = arr.length;
        for (j = (l - 1); j >= 0; j -= 1) {
            cc = arr[j].getAttribute("w3-repeat").split(" ");
            if (cc.length == 1) {
                repeat = cc[0];
            } else {
                repeatX = cc[0];
                repeat = cc[2];
            }
            arr[j].removeAttribute("w3-repeat");
            repeatObj = data[repeat];
            if (repeatObj && typeof repeatObj == "object" && repeatObj.length != "undefined") {
                i = 0;
                for (x in repeatObj) {
                    i += 1;
                    rowClone = arr[j];
                    rowClone = w3_replace_curly(rowClone, "element", repeatX, repeatObj[x]);
                    a = rowClone.attributes;
                    for (ii = 0; ii < a.length; ii += 1) {
                        a[ii].value = w3_replace_curly(a[ii], "attribute", repeatX, repeatObj[x]).value;
                    }
                    (i === repeatObj.length) ? arr[j].parentNode.replaceChild(rowClone, arr[j]) : arr[j].parentNode.insertBefore(rowClone, arr[j]);
                }
            } else {
                console.log("w3-repeat must be an array. " + repeat + " is not an array.");
                continue;
            }
        }
        html = w3_replace_curly(html, "element");
        htmlObj.parentNode.replaceChild(html, htmlObj);
        function init_template(id, obj) {
            var template;
            template = obj.cloneNode(true);
            if (w3.dataObject.hasOwnProperty(id)) { return w3.dataObject[id]; }
            w3.dataObject[id] = template;
            return template;
        }
        function w3_replace_curly(elmnt, typ, repeatX, x) {
            var value, rowClone, pos1, pos2, originalHTML, lookFor, lookForARR = [], i, cc, r;
            rowClone = elmnt.cloneNode(true);
            pos1 = 0;
            while (pos1 > -1) {
                originalHTML = (typ == "attribute") ? rowClone.value : rowClone.innerHTML;
                pos1 = originalHTML.indexOf("{{", pos1);
                if (pos1 === -1) { break; }
                pos2 = originalHTML.indexOf("}}", pos1 + 1);
                lookFor = originalHTML.substring(pos1 + 2, pos2);
                lookForARR = lookFor.split("||");
                value = undefined;
                for (i = 0; i < lookForARR.length; i += 1) {
                    lookForARR[i] = lookForARR[i].replace(/^\s+|\s+$/gm, ''); //trim
                    if (x) { value = x[lookForARR[i]]; }
                    if (value == undefined && data) { value = data[lookForARR[i]]; }
                    if (value == undefined) {
                        cc = lookForARR[i].split(".");
                        if (cc[0] == repeatX) { value = x[cc[1]]; }
                    }
                    if (value == undefined) {
                        if (lookForARR[i] == repeatX) { value = x; }
                    }
                    if (value == undefined) {
                        if (lookForARR[i].substr(0, 1) == '"') {
                            value = lookForARR[i].replace(/"/g, "");
                        } else if (lookForARR[i].substr(0, 1) == "'") {
                            value = lookForARR[i].replace(/'/g, "");
                        }
                    }
                    if (value != undefined) { break; }
                }
                if (value != undefined) {
                    r = "{{" + lookFor + "}}";
                    if (typ == "attribute") {
                        rowClone.value = rowClone.value.replace(r, value);
                    } else {
                        w3_replace_html(rowClone, r, value);
                    }
                }
                pos1 = pos1 + 1;
            }
            return rowClone;
        }
        function w3_replace_html(a, r, result) {
            var b, l, i, a, x, j;
            if (a.hasAttributes()) {
                b = a.attributes;
                l = b.length;
                for (i = 0; i < l; i += 1) {
                    if (b[i].value.indexOf(r) > -1) { b[i].value = b[i].value.replace(r, result); }
                }
            }
            x = a.getElementsByTagName("*");
            l = x.length;
            a.innerHTML = a.innerHTML.replace(r, result);
        }
    };

//==================+ FORM BACKGROUND ==========================    
//==============================================================

const LABELS_FORM_BACKGROUND = {
    'CEP': 'CEP',
    'Numero': 'Número',
    'Bairro': 'Bairro',
    'Cidade': 'Cidade',
    'Endereco': 'Endereço',
    'Estado': 'Estado',
    'Complemento': 'Complemento'
};

Object.freeze(LABELS_FORM_BACKGROUND);

const loadersFormExemploBackground = {
    submit: stateLoader('loader-submit-form-exemplo-background'),
    estados: stateLoader('estados-spinner-form-exemplo-background'),
    municipios: stateLoader('municipios-spinner-form-exemplo-background'),
    cep: stateLoader('cep-spinner-form-exemplo-background')
}

async function submit_formExemploBackground(event) {

    event.preventDefault();

    const form_exemplo_background = document.getElementById('form-exemplo-background')
    const formulario = await form_data_to_json(form_exemplo_background);

    const { status, messages } = validateRequiredInputs(formulario, [
        'CEP',
        'Bairro',
        'Numero',
        'Cidade',
        'Endereco',
        'Estado',
    ], LABELS_FORM_BACKGROUND);

    if (!status) {
        feedback(messages, 'danger');
        return;
    }

    loadersFormExemploBackground.submit(true);

    //REMOVER AO UTILIZAR O POST
    setTimeout(function () {
        loadersFormExemploBackground.submit(false);
    }, 3000)


    // post(`URL`, formularioTratado)
    //     .then((data) => {
    //         feedback(data.avisos.mensagem);
    //         form_exemplo_background.reset();
    //         loadersFormExemploBackground.submit(false);
    //     })
    //     .catch((error) => {
    //         feedback(error.avisos.notificacoes, 'danger');
    //         loadersFormExemploBackground.submit(false);
    // });   

}

window.onload = function () {
    popula_estados('form-estado', 'form-cidade', { loaderEstado: loadersFormExemploBackground.estados, loaderMunicipio: loadersFormExemploBackground.municipios });
    popula_cep({
        cep: 'form-cep',
        estado: 'form-estado',
        municipio: 'form-cidade',
        bairro: 'form-bairro',
        endereco: 'form-endereco'
    }, { loaderCep: loadersFormExemploBackground.cep, loaderMunicipio: loadersFormExemploBackground.municipios });
    validateLength()(
        'form-estado',
        'form-cidade',
        'form-endereco',
    );

    validateLength(9)(
        'form-cep'
    );

    mascara('#####-###', 'form-cep');
    enderecoValidator('form-bairro');
    enderecoValidator('form-endereco');
    enderecoComplementoValidator('form-complemento');


    //===========================================
    //============= FORM EXEMPLO ================

    validateLength()(
        'form-indicacao'
    );
    validateLength(14)(
        'form-cpf'
    );
    nameValidator('form-nomeResponsavel');

    telefoneValidator('form-telefone');
    mascara_telefone('form-telefone');
    telefoneValidator('form-celular');
    mascara_telefone('form-celular');
    emailValidator('form-email');
    mascara('###.###.###-##', 'form-cpf');
}
//========================================================================

//==================+ FORM EXEMPLO ==========================    
//==============================================================

const loaders_form_exemplo = {
    submit: stateLoader('loader-submit-form-exemplo')
}

const LABELS_FORM_EXEMPLO = {
    'NomeResponsavel': 'Nome do Responsável',
    'Cpf': 'CPF',
    'Email': 'E-mail',
    'Telefone': 'Telefone',
    'Celular': 'Celular',
    'Indicacao': 'Indicação',
};


async function submitFormExemplo(event) {
    event.preventDefault();
    const form_exemplo = _pegar_elemento('form-exemplo');
    const formulario = await form_data_to_json(form_exemplo);
    const { status, messages } = validateRequiredInputs(formulario,
        [
            'NomeResponsavel',
            'Cpf',
            'Email',
            'Telefone',
            'Celular',
            'Indicacao'
        ], LABELS_FORM_EXEMPLO);

    if (!status) {
        feedback(messages, 'danger');
        return;
    }


    const objPost = {
        nome: formulario.NomeResponsavel,
        cpf: formulario.Cpf,
        email: formulario.Email,
        telefone: formulario.Telefone,
        celular: formulario.Celular,
        indicacao: formulario.Indicacao,
    }

    loaders_form_exemplo.submit(true);

    //REMOVER AO UTILIZAR O POST
    setTimeout(function () {
        loaders_form_exemplo.submit(false);
    }, 3000)

    // post(`URL`, objPost)
    //     .then((data) => {
    //         feedback(data.avisos.mensagem);
    //         form_exemplo.reset();
    //     })
    //     .catch((error) => feedback(error.avisos.notificacoes, 'danger'))
    //     .finally(() => loaders_form_exemplo.submit(false));

}


//==============================================================

Url = "https://api.objetivo.br/site/v1/"
ChavePublica = "5h9Bb71nB0v1Rj4gvhd1CLzDaPdU0LQUjQ9uElcU26amZSo3wZ3Zloce93RUWkqhelBUgVSyzImAaVXF8l3YcmLsJReDBxwvQcBD";



url_base = Url;

async function get(url) {
    return new Promise((resolve, reject) => {
        var request = new XMLHttpRequest();
        request.open('GET', `${url_base}${url}`, true);
        request.setRequestHeader("Content-Type", "application/json");
        request.setRequestHeader("Chave-Publica", `${ChavePublica}`);
        request.onload = function () {
            if (this.status >= 200 && this.status < 400) {
                // sucesso
                var data = JSON.parse(this.response);
                resolve(data);
            }
            else {
                // Erro podendo retornar algo
                reject(this.response);
            }
        };
        request.onerror = function (e) {
            reject(e);
        };
        request.send();
    });
}

async function post(url, data) {
    return new Promise((resolve, reject) => {
        var request = new XMLHttpRequest();
        request.open('POST', `${url_base}${url}`, true);
        request.setRequestHeader("Content-Type", "application/json");
        request.setRequestHeader("Chave-Publica", `${ChavePublica}`);
        request.onload = function () {
            if (this.status >= 200 && this.status < 400) {
                // sucesso
                let retorno = JSON.parse(this.response);
                resolve(retorno);
            }
            else {
                // Erro podendo retornar algo
                reject(JSON.parse(this.response));
            }
        };
        request.onerror = function (e) {
            reject(e);
        };
        request.send(JSON.stringify(data));
    });
}

async function put(url, data) {
    return new Promise((resolve, reject) => {
        var request = new XMLHttpRequest();
        request.open('PUT', `${url_base}${url}`, true);
        request.setRequestHeader("Content-Type", "application/json");
        request.setRequestHeader("Chave-Publica", `${ChavePublica}`);
        request.onload = function () {
            if (this.status >= 200 && this.status < 400) {
                // sucesso
                let retorno = JSON.parse(this.response);
                resolve(retorno);
            }
            else {
                // Erro podendo retornar algo
                reject(JSON.parse(this.response));
            }
        };
        request.onerror = function (e) {
            reject(e);
        };
        request.send(JSON.stringify(data));
    });
}

// Tratamento do formulário

async function form_data_to_json(form) {
    const form_data = new FormData(form);
    return new Promise((resolve, reject) => {
        try {
            let object = {};
            form_data.forEach((value, key) => {
                if (!Reflect.has(object, key)) {
                    object[key] = value;
                    return;
                }
                if (!Array.isArray(object[key])) {
                    object[key] = [object[key]];
                }
                object[key].push(value);
            });
            resolve(object);
        } catch (error) {
            reject(error);
        };
    });
};

function feedback(mensagem, tipo = 'success') {
    console.log(mensagem);
    let exibicao = mensagem;
    if (Array.isArray(mensagem)) {
        exibicao = mensagem.map(e => `${e.mensagem} ${e.referencia ?? ""}`).join("<br>")
    }
    const alert = `<div class="alert text-center alert-${tipo}" role="alert">
                  ${exibicao}
                </div>`;
    const alert_box = document.getElementById('alert-box');
    alert_box.innerHTML = alert;
}

function stateLoader(loader) {
    return (state = false) => {
        state ? document.getElementById(loader).classList.remove('visually-hidden')
            : document.getElementById(loader).classList.add('visually-hidden')
    }
}

const ordena_objetos = (arr, campo = 'nome') => arr.sort((a, b) => ((a[campo]?.trim())?.localeCompare(b[campo]?.trim())));

async function popula_estados(id_estado, id_municipio, loaders = { loaderEstado: () => { }, loaderMunicipio: () => { } }, campoValue = 'ibge') {
    const select_estado = document.getElementById(id_estado);
    const select_municipio = document.getElementById(id_municipio);

    const { loaderEstado, loaderMunicipio } = loaders;

    loaderEstado(true);
    const { dados: { resultadosDaPaginaAtual } } = await get('servico/unidade/estado')
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
            loaderEstado();
            disable(select_estado, false);

        });
    if (!resultadosDaPaginaAtual) return;

    const estados = ordena_objetos(resultadosDaPaginaAtual);

    _popula_select(estados, select_estado, 'sigla', 'nome');

    select_estado.onchange = (ev) => popula_municipios(ev.target.value, select_municipio, loaderMunicipio, campoValue);
}

function ativarChange(select) {
    const e = new Event("change");
    select.dispatchEvent(e);
}

async function popula_municipios(sigla, select_municipio, loaderMunicipio = () => { }, campoValue) {
    disable(select_municipio);
    select_municipio.innerHTML = `<option value="">Selecione</option>`;
    ativarChange(select_municipio);
    if (!sigla) return;
    loaderMunicipio(true);
    const { dados: { resultadosDaPaginaAtual } } = await get(`servico/unidade/municipio?uf=${sigla}&maximo=0`)
        .catch(error => console.error(error))
        .finally(() => {
            loaderMunicipio();
            disable(select_municipio, false);
        });
    loaderMunicipio();
    if (!resultadosDaPaginaAtual) return;

    const municipios = ordena_objetos(resultadosDaPaginaAtual);

    _popula_select(municipios, select_municipio, campoValue, 'nome');
}

function disable(campo, valor = true) {
    valor ? campo.setAttribute('disabled', true) : campo.removeAttribute('disabled');
}

function _popula_select(arr, select, value, text) {
    if (arr.length == 0) {
        const option = document.createElement("option");
        option.text = "Nenhum " + text + " encontrado";
        select[0] = option;
        return
    }
    arr.forEach(elem => {
        if (!elem[value] || !elem[text]) return;
        const option = document.createElement("option");
        if (value === text) option.value = (elem[value]?.toLowerCase())?.trim();
        else option.value = elem[value];
        option.text = elem[text];
        select.append(option);
    });
}

function popula_cep(input_ids, loader_municipio) {

    const cep = _pegar_elemento(input_ids.cep);
    let valorAntigo = undefined;

    cep.addEventListener('blur', function () {
        if (cep.value.length === 9 && valorAntigo != cep.value) {
            valorAntigo = cep.value;
            _buscar_cep(input_ids, cep.value, loader_municipio);
        };
    });
}

async function _buscar_cep(input_ids, valor_cep, loaders) {

    const { loaderCep, loaderMunicipio } = loaders;

    loaderCep(true);
    const { dados } = await get(`servico/logradouro/cep/${valor_cep}`)
        .catch(error => console.error(error))
        .finally(() => {
            loaderCep();
        });

    _preencher_campos_cep(input_ids, dados, loaderMunicipio);
}

async function _preencher_campos_cep(input_ids, valor, loader_municipio) {
    const { estado, municipio, bairro, endereco } = _pegar_elemento(input_ids)
    estado.value = valor.municipio.estado.sigla || "";
    bairro.value = valor.bairro || "";
    endereco.value = valor.nome || "";
    await popula_municipios(estado.value || "", municipio, loader_municipio, 'ibge');
    municipio.value = valor.municipio.ibge || "";
}

function _pegar_elemento(id_elem) {
    if (typeof id_elem == 'object') {
        const campos = {};
        for (let element in id_elem) {
            campos[element] = document.getElementById(id_elem[element]);
        }
        return campos;
    }

    return document.getElementById(id_elem);
}


//====================================================

/*
  Atribui uma função no evento 'Blur' do JQuery 
    1° param é o id do input no qual será colocado o blur
    2º param é a função que será executada no callback do blur
    Param da função de retorno é opcional, é para o caso da função que foi passada também necessite de parametros 
*/
function _onBlur(input, fn) {
    return (...params) => {
        const input_doc = document.getElementById(input);
        input_doc.addEventListener('blur', function () {
            fn(...params);
        }, false);
    };
};

/*
    Alteração das classes de acordo com a validação do length do input
*/
function _toggleLengthValidClass(input, length) {
    const input_doc = document.getElementById(input);
    if (input_doc.value.length < length) {
        _setInvalid(input);
    } else {
        input_doc.classList.remove('is-invalid');
    };
}

/*
    Alteração das classes de acordo com a validação da RegExp do input
*/
function _testRegExp(exp, input) {
    const input_doc = document.getElementById(input);
    const result = exp.test(input_doc.value);
    if (result) {
        input_doc.classList.remove('is-invalid');
    } else {
        _setInvalid(input);
    };
};

function _setInvalid(input) {
    const input_doc = document.getElementById(input);
    input_doc.classList.add('is-invalid');
    input_doc.classList.remove('is-valid');
}

function validateLength(length = 1) {
    return (...inputIds) => {
        (inputIds || []).forEach(input => {
            if (length > 1) {
                const input_doc = document.getElementById(input);
                input_doc.setAttribute('pattern', `^.{${length},}$`);
            }
            _onBlur(input, _toggleLengthValidClass)(input, length);
        });
    };
};

/*
    Validação do input de email
*/
function emailValidator(input) {
    _onBlur(input, _testRegExp)(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, input);
    const input_doc = document.getElementById(input);
    input_doc.setAttribute('pattern', '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$');
}

/*
    Validação do input de Escola/Empresa
*/
function nameValidator(input) {
    _onBlur(input, _testRegExp)(/^[A-zÀ-ÿ'0-9]+[\s\.]?([A-zÀ-ÿ'0-9][\s\.]?)*[A-zÀ-ÿ'0-9]+$/, input);
    const input_doc = document.getElementById(input);
    input_doc.setAttribute('pattern', `^[A-zÀ-ÿ'0-9]+[\\s\\.]?([A-zÀ-ÿ'0-9][\\s\\.]?)*[A-zÀ-ÿ'0-9]+$`);
};

/*
    Validação do input de Endereços
*/
function enderecoValidator(input) {
    _onBlur(input, _testRegExp)(/^[A-zÀ-ÿ'0-9]+[.,-]?(\s-)?[\s\.]?([A-zÀ-ÿ'0-9][.,-]?(\s-)?[\s\.]?)*[A-zÀ-ÿ'0-9]+$/, input);
    const input_doc = document.getElementById(input);
    input_doc.setAttribute('pattern', `^[A-zÀ-ÿ'0-9]+[\\.,-]?(\\s-)?[\\s\\.]?([A-zÀ-ÿ'0-9][\\.,-]?(\\s-)?[\\s\\.-]?)*[A-zÀ-ÿ'0-9]+$`);
};

function enderecoComplementoValidator(input) {
    _onBlur(input, _testRegExp)(/^[A-zÀ-ÿ0-9]?[.,-]?(\s-)?[\s\.]?([A-zÀ-ÿ0-9][.,-]?(\s-)?[\s\.]?)*[A-zÀ-ÿ0-9]?$/, input);
    const input_doc = document.getElementById(input);
    input_doc.setAttribute('pattern', `^[A-zÀ-ÿ'0-9]?[\\.,-]?(\\s-)?[\\s\\.]?([A-zÀ-ÿ'0-9][\\.,-]?(\\s-)?[\\s\\.-]?)*[A-zÀ-ÿ'0-9]?$`);
};

/*
    Validação do input do RA de alunos
*/
function raValidator(input) {
    _onBlur(input, _testRegExp)(/^[0-9a-zA-ZA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ][0-9a-zA-ZA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\s]+$/, input);
    const input_doc = document.getElementById(input);
    input_doc.setAttribute('pattern', '^[0-9a-zA-ZA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ][0-9a-zA-ZA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\\s]+$');
};

/*
    Validação do input de pessoas
*/
function nameSobrenomeValidator(input) {
    _onBlur(input, _testRegExp)(/^[A-zÀ-ÿ']+\s?([A-zÀ-ÿ']\s?)*[A-zÀ-ÿ']+$/, input);
    const input_doc = document.getElementById(input);
    input_doc.setAttribute('pattern', `^[A-zÀ-ÿ']+\\s?([A-zÀ-ÿ']\\s?)*[A-zÀ-ÿ']+$`);
}

/*
    Validação do input de Telefone caso tenha algum caractere
*/
function telefoneValidator(input) {
    const input_doc = document.getElementById(input);
    input_doc.setAttribute('pattern', `^.{14,}$`);
    input_doc.addEventListener("blur", function () {

        var result = input_doc.value;

        if (result.toString() != '' && result.toString() != '(') {
            var exp = /^.{14,}$/;
            const result_exp = exp.test(result);
            if (result_exp) {
                input_doc.classList.remove('is-invalid');
            } else {
                input_doc.classList.add('is-invalid');
            };
        } else if (result.toString() === '(') {
            input_doc.value = '';
        }
        else if (result.toString() == '') {
            input_doc.classList.add('is-invalid');
        }
        else {
            input_doc.removeAttribute('required');
            input_doc.classList.remove('is-invalid');
        };
    });
};

/*
    Função criadora de máscaras
*/
function mascara(m, input) {
    let t = document.getElementById(input);
    t.addEventListener('keyup', function (e) {
        let cursor = t.selectionStart;
        let texto = t.value;
        let texto_length = texto.length;
        let mask_length = m.length;
        let livre = false;

        texto = texto.replace(/\D/g, '');
        if (window.event) {
            id = e.keyCode;
        } else if (e.which) {
            id = e.which;
        }
        cursorfixo = false;
        if (cursor < texto_length) cursorfixo = true;
        if (id == 16 || id == 19 || (id >= 33 && id <= 40)) livre = true;
        ii = 0;
        mm = 0;
        if (!livre) {
            if (id != 8) {
                t.value = "";
                j = 0;
                for (i = 0; i < mask_length; i++) {
                    if (m.substr(i, 1) == "#") {
                        t.value += texto.substr(j, 1);
                        j++;
                    } else if (m.substr(i, 1) != "#") {
                        t.value += m.substr(i, 1);
                    }
                    if (id != 8 && !cursorfixo) cursor++;
                    if ((j) == texto_length + 1) break;

                }
            }
        }
        if (cursorfixo && !livre) cursor--;
        t.setSelectionRange(cursor, cursor);
    });

}


function _applyMask(input, fn) {
    setTimeout(() => {
        input.value = fn(input.value);
    }, 1)
}

const _telefoneModel = (value) => {
    return value.replace(/\D/g, "")                        //Remove tudo o que não é dígito
        .replace(/^(\d{2})(\d)/g, "($1) $2")       //Coloca parênteses em volta dos dois primeiros dígitos
        .replace(/(\d)(\d{4})$/, "$1-$2");         //Coloca hífen entre o quarto e o quinto dígitos
}

const _numeroModel = (value) => {
    return value.replace(/\D/g, "")                         // Remove tudo o que não é dígito
        .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") // Adiciona . na unidade de milhar
}

const _stringModel = (value) => {
    return value.replace(/[^a-zÀ-ÿ\s]/gi, "")                         // Remove tudo o que não é dígito
};

/* 
    Função criadora de máscaras de celular/telefone
*/
function mascara_telefone(input) {
    const form_doc = document.getElementById(input);
    form_doc.setAttribute('maxlength', 15);
    form_doc.onkeypress = function () {
        _applyMask(this, _telefoneModel);
    }
}

/* 
    Função criadora de máscaras de números
*/
function mascara_numeros(...inputs) {
    (inputs || []).forEach(input => {
        const form_doc = document.getElementById(input);
        form_doc.onkeypress = function () {
            _applyMask(this, _numeroModel);
        }
    });
}

function mascara_string(...inputs) {
    (inputs || []).forEach(input => {
        const form_doc = document.getElementById(input);
        form_doc.onkeypress = function () {
            _applyMask(this, _stringModel);
        }
    });
}


// CONVERSÕES DE VALORES E VALIDAÇÕES

const _onlyNumber = (value) => value ? value.replace(/\D/g, "") : 0;
const _stringToNumber = (string) => parseInt(_onlyNumber(string));

function _percorreCampos(fn) {
    return (form, inputs, labels) => {
        return fn(form, inputs, labels);
    }
}

//Converte velores dos inputs de string para Number
const inputValueNumbers = _percorreCampos((form, inputs, _) => {
    const formulario = (inputs || []).reduce((acc, input) => ({
        ...acc,
        [input]: _stringToNumber(form[input])
    }), form)

    return formulario;
});

//Valida os campos que são 'Required'
const validateRequiredInputs = _percorreCampos((form, inputs, labels) => {
    let status = { status: true, messages: "" };
    let messages = "";

    for (input of inputs) {

        if (form[input] === null || form[input] === undefined || form[input].length === 0 || form[input].trim().length === 0) {
            document.getElementsByName(input)[0].classList.add('is-invalid');
            messages += `O campo ${labels[input]} não pode ser vazio. <br>`;
            Object.assign(status, { status: false, messages });
        }
    }

    return status;
});
