
/*
    tokens to be examined.
 */
var tokens = {
    html: 'html',
    base: 'base',
    head: 'head',
    style: 'style',
    title: 'title',
    button: 'button',
    form: 'form',
    input: 'input',
    label: 'label',
    output: 'output',
    prog: 'progress',
    menu: 'menu',
    menuitem: 'menuitem',
    audio: 'audio',
    map: 'map',
    video: 'video'
};

function tokenizer(token) {
    /*
        [<]  matches the character < literally (case sensivtive)
        [.]  matches any character(except for line terminators)
        [+]  matches between one and unlimitted times, as many time as
             possible, giving back as needed (greedy)
        [>]  matches the character > literally (case sensitive)
        [g]  global. All matches(don't return after first match) 
     */

    var regx = /<.+>/g;
    // convert token to string
    var result = token.match(regx).toString();
    // trim and return the new string slice first and last char
    result = result.replace(/\s/g, "").slice(1, -1);
    for (var token in tokens) {
        if (tokens[token] === result) {
            console.log(result)
        }
    }
}


tokenizer("<html> ")
