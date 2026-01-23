const mongoose = require('mongoose');

// 1. Схема (должна повторять структуру твоего объекта)
const tourSchema = new mongoose.Schema({
    chapter: String,
    desc: String,
    title: String,
    arr: [{
        title: String,
        desc: String,
        duration: String,
        place: String
    }],
    slider: [{
        item: String, // Тут будет URL картинки
        title: String
    }]
});

const Tour = mongoose.model('Tour', tourSchema);

// 2. Твои данные (вставь сюда свой массив stepsTours, заменив импорты на ссылки)
const stepsTours = [ /* Твой огромный массив */ ];

// 3. Функция подключения и загрузки
async function importData() {
    try {
        await mongoose.connect('ТВОЯ_ССЫЛКА_MONGODB_ATLAS_ИЛИ_LOCAL');
        console.log("База подключена...");

        // Очищаем старые данные (по желанию), чтобы не дублировать
        await Tour.deleteMany();

        // Загружаем массив
        await Tour.insertMany(stepsTours);

        console.log("Данные успешно импортированы!");
        process.exit();
    } catch (error) {
        console.error("Ошибка:", error);
        process.exit(1);
    }
}

importData();