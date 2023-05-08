const Country = require('./Country');

const data = [
    'Россия',
    'СССР',
    'США',
    'Вестерны',
    'Франция',
    'Южная Корея',
    'Великобритания',
    'Документальные',
    'Япония',
    'Италия',
    'Испания',
    'Германия',
    'Турция',
    'Швеция',
    'Норвегия',
    'Гонконг'
];

async function writeDataCountry(){
    const length = await Country.count();
    if (length == 0 ){
        data.map((item, index) =>{
            new Country ({
                name : item,
                key : index
            }).save()
        })
    }
}
module.exports = writeDataCountry