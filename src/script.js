class Actor {
    constructor(lvl, race, amulet, ring) {
        this._lvl = lvl;
        this._race = race;
        this._spells_list = [];
        this._perks_list = [];
        this._active_effects_list = [];
        this._amulet = amulet;
        this._armor_set = [];
        this._ring = ring;
        this._weapon = [];
        this.updateView();
    }

    get_race() {
        return this._race;
    }

    set_race(value) {
        this._race = value;
        this.updateView();
    }

    set_lvl(lvl) {
        this._lvl = lvl;
        this.updateView();
    }
    get_weapon() {
        return this._weapon;
    }
    set_weapon(weapon) {

        if (!this._weapon.includes(weapon) && weapon !== 'Выберите оружие...') {
            this._weapon.push(weapon);
        }
        this.updateView();
        return this._weapon;
    }
    set_armor_set(armor) {
        if (!this._armor_set.includes(armor) && armor !== 'Выберите броню...') {
            this._armor_set.push(armor);
        }
        this.updateView();
        return this._armor_set;
    }
    set_ring(ring) {
        this._ring = ring;
    }
    set_amulet(amulet) {
        this._amulet = amulet;
    }

    addSpell(spell_title) {
        if (!this._spells_list.includes(spell_title) &&  spell_title !== 'Выберите заклинания...') {
            this._spells_list.push(spell_title);
        }
        this.updateView();
        return this._spells_list;
    }


    add_perks(perk_title) {
        if (!this._perks_list.includes(perk_title) && perk_title !== 'Выберите перки...') {
            this._perks_list.push(perk_title);
        }
        this.updateView();
        return this._perks_list;
    }

    get_all_stats() {
        console.log(`lvl: ${this._lvl}\nrace: ${this._race}\nperks: ${this._perks_list}\nspells: ${this._spells_list}`);

    }

    updateView() {
        document.getElementById("get_race").textContent = `Раса: ${this._race}`;
        document.getElementById("get_lvl").textContent = `Уровень: ${this._lvl}`;
        document.getElementById("get_perks").textContent = `Перки: ${this._perks_list}`;
        document.getElementById("get_spells").textContent = `Заклинания: ${this._spells_list}`;
        document.getElementById("get_weapon").textContent = `Оружие: ${this._weapon}`;
        document.getElementById("get_armor_set").textContent = `Сет брони: ${this._armor_set}`;
        document.getElementById("get_amulet").textContent = `Амулет: ${this._amulet}`;
        document.getElementById("get_ring").textContent = `Кольцо: ${this._ring}`;
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
loadSelectData('set_weapon', 'src/json/weapon.json');
// для перков
loadSelectData('set_perks', 'src/json/perks.json');
// для спелов
loadSelectData('set_spells', 'src/json/all_spells.json');
// для брони
loadSelectData('set_armor_set', 'src/json/armor.json');
// для колец
loadSelectData('set_ring', 'src/json/ring.json');
// для амлулетов
loadSelectData('set_amulet', 'src/json/amulet.json');


let race = document.getElementById('race');
let lvl = document.getElementById('set_lvl');
let spells = document.getElementById('set_spells');
let perks = document.getElementById('set_perks');
let weapon = document.getElementById('set_weapon');
let armor_set = document.getElementById('set_armor_set');
let amulet = document.getElementById('set_amulet');
let ring = document.getElementById('set_ring');
let button = document.getElementById('add_to_actor');
let Actor_name = document.getElementById('Actor_name');
let download_button = document.getElementById('download_build');

let player = new Actor(0, 'Не выбрано');



button.addEventListener('click', function () {
    player.set_weapon(weapon.value);
    player.set_ring(ring.value);
    player.set_amulet(amulet.value);
    player.set_armor_set(armor_set.value);
    player.set_race(race.value);
    player.add_perks(perks.value);
    player.addSpell(spells.value);
    player.set_lvl(lvl.value);
    console.log(player);
});


