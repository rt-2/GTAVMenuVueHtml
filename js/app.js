
function _ChangeMenuValue(varname, value) {

    eventName = (typeof eventName === 'undefined') ? 'tr_default_event' : eventName;

    if (typeof mp !== 'undefined') mp.trigger(eventName, varname, value);

    this.value = value;
}

function _OpenInputText(varname, eventName) {

    setTimeout( () => {
        _InputText('Example Script', 'Please insert new value for \'' + varname + '\':', (t) => {

            _ChangeMenuValue.bind(this)(varname, t, eventName);
        });
    }, 10);
}

function testIt(text) {
    alert(text);
}

var subMenuInfo = new PopupMenu('Subsub menu', null, [
        new MenuItem('There we go').Click(function (e) { console.log("Clicked "+e); }),
        new MenuItem('Ttest:', 'value').Click(function () { _OpenInputText.bind(this)('new_vehicle_owner', 'Call_another_event_than_default'); }),
        new MenuItem('Currently backspace and no RMB stuff').Back()
]).Style('blue');

var menuInfo = new PopupMenu('Vinewood Hills, 234', 'buy house', [
    new MenuItem('Cost', '$10000').Click(function () { setTimeout(function () { _InputText('This is a title', 'This is the text:', function (t) { testIt(t); }); }, 10); }),
    new MenuItem('Rooms', 3),
    new MenuItem('Sleeping places', 1, 'Determines how many people can live in this house'),
    new MenuItem('Select style', ['Modern', 'Victorian', 'Vagabond']).SelectionChanged(function (index, name) { console.log(index + ': ' + name); }),
    new MenuItem('Owner', '<img style="margin: -5px -5px 0 0" src="img/429.png" />'),
    new MenuItem('Buy').Style('green button').Submenu(subMenuInfo),
    new MenuItem('Sell').Style('red button'),
    new MenuItem('Close menu').Style('gray'),
], 5).Stats([
    new MenuStatItem('Engine speed what', 25, 5),
    new MenuStatItem('This', 50)
]).Slider('Opacity', null, 50).ColorPicker('Colors', [
    '40BAE3', '6840E3', '30BF7F', '9FF23A',
    '3AF2EF', 'F2713A', 'F2463A', 'F2F07E',
    'F255AE', '999095', '40BAE3', '6840E3',
    '30BF7F', '9FF23A', '3AF2EF', 'F2713A',
    'F2463A', 'F2F07E', 'F255AE', '999095',
]).XYGrid(0, 0).ActiveItemChanged(function (index) { console.log(index); }).Style('blue');

new Vue({
    el: '#container',
    data: {
        menu: menuInfo
    }
});
