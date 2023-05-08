const Genres = require('./Genres');

const data = [
    'Аниме',
    'Биографии',
    'Боевики',
    'Вестерны',
    'Военные',
    'Детективы',
    'Детские',
    'Документальные',
    'Драмы',
    'Игры',
    'Исторические',
    'Комедии',
    'Концерты',
    'Короткометражки',
    'Криминал',
    'Мелодрамы'
];

async function writeDataGenre(){
    const length = await Genres.count();
    if (length == 0 ){
        data.map((item, index) =>{
            new Genres ({
                name : item,
                key : index
            }).save()
        })
    }
}
module.exports = writeDataGenre