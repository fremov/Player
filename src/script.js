class Actor {
    constructor(health, lvl, race, amulet, armor_set, ring, weapon) {
        this._health = health;
        this._lvl = lvl;
        this._race = race;
        this._spells_list = [];
        this._perks_list = [];
        this._active_effects_list = [];
        this._amulet = amulet;
        this._armor_set = armor_set;
        this._ring = ring;
        this._weapon = weapon;
        this.updateView();
        // console.log(this.get_health());
    }

    get_health() {
        return this._health;
    }

    set_health(value) {
        this._health = value;
        this.updateView();
    }

    get_race() {
        return this._race;
    }

    set_race(value) {
        this._race = value;
        this.updateView();
    }

    get_weapon() {
        return this._weapon;
    }
    set_weapon(weapon) {
        this._weapon = weapon;
    }
    moveTo(x, y, z) {
        console.log(`x: ${x}\ny: ${y}\nz: ${z}`)
    }

    equip(item) {

    }

    addSpell(spell_title) {
        this._spells_list.push(spell_title);
        this.updateView();
        return this._spells_list;
    }


    add_perks(perk_title) {
        this._perks_list.push(perk_title);
        this.updateView();
        return this._perks_list;
    }

    // takeDamage(number) {
    //     this.health = this.health - number;
    //     console.log(this.health);
    // }

    _get_items() {
        let path = 'Alteration.json';
        let data = JSON.parse(path);
        console.log(data);
    }

    get_all_stats() {
        console.log(`health: ${this._health}\nlvl: ${this._lvl}\nrace: ${this._race}\nperks: ${this._perks_list}\nspells: ${this._spells_list}`);

    }

    updateView() {
        document.getElementById("get_hp").textContent = `Health: ${this._health}`;
        document.getElementById("get_race").textContent = `Race: ${this._race}`;
        document.getElementById("get_lvl").textContent = `Level: ${this._lvl}`;
        document.getElementById("get_perks").textContent = `Перки: ${this._perks_list}`;
        document.getElementById("get_spells").textContent = `Заклинания: ${this._spells_list}`;
        document.getElementById("get_weapon").textContent = `Оружие: ${this._weapon}`;
        document.getElementById("get_armor_set").textContent = `Сет брони: ${this._armor_set}`;
    }

}

function loadSelectData(selectId, jsonDataUrl) {
    const select = document.getElementById(selectId);

    fetch(jsonDataUrl)
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const option = document.createElement('option');
                option.text = item.value;
                select.appendChild(option);
            });
        });
}

// для оружия
loadSelectData('set_weapon', 'src/json/data.json');
// для перков
loadSelectData('set_perks', 'src/json/perks.json');
// для спелов
loadSelectData('set_spells', 'src/json/all_spells.json');


let race = document.getElementById('race');
let spells = document.getElementById('set_spells');
let perks = document.getElementById('set_perks');
let weapon = document.getElementById('set_weapon');
let button = document.getElementById('add_to_actor');
// let create_actor = document.getElementById('Actor');


let player = new Actor(0, 0, 'Выберите расу', "Выберите амулет", 'Выберите набор брони', 'Выберите кольцо');

button.addEventListener('click', function () {
    player.set_weapon(weapon.value)
    player.set_race(race.value);
    player.add_perks(perks.value);
    player.addSpell(spells.value);
    player.get_all_stats();
})



