import { Command, Positional } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { SuraService } from '../../sura/services/sura.service';

@Injectable()
export class SuraSeed {

    constructor(private readonly suraService: SuraService,) {}

    @Command({ command: 'create:suar', describe: 'create suar' })

    async create() {

        try {
            const allSavedSuras = await this.suraService.getAll();

            if (allSavedSuras.length > 0) {
                for await (const sura of allSavedSuras) {
                    this.suraService.deleteOne(sura._id);
                }
            }
        }catch (err) {
            console.log(err)
        }


        for await (const item of this.suar) {

            const sura = await this.suraService.create(item);
        }

        console.log(`all suar saved to database`)

    }

    private suar = [
        {
            "id": 1,
            "number": 1,
            "name_ar": "سورة الفاتحة",
            "name_en": "Al-Faatiha",
            "name_en_translation": "The Opening",
            "type": "Meccan"
        },
        {
            "id": 2,
            "number": 2,
            "name_ar": "سورة البقرة",
            "name_en": "Al-Baqara",
            "name_en_translation": "The Cow",
            "type": "Medinan"
        },
        {
            "id": 3,
            "number": 3,
            "name_ar": "سورة آل عمران",
            "name_en": "Aal-i-Imraan",
            "name_en_translation": "The Family of Imraan",
            "type": "Medinan"
        },
        {
            "id": 4,
            "number": 4,
            "name_ar": "سورة النساء",
            "name_en": "An-Nisaa",
            "name_en_translation": "The Women",
            "type": "Medinan"
        },
        {
            "id": 5,
            "number": 5,
            "name_ar": "سورة المائدة",
            "name_en": "Al-Maaida",
            "name_en_translation": "The Table",
            "type": "Medinan"
        },
        {
            "id": 6,
            "number": 6,
            "name_ar": "سورة الأنعام",
            "name_en": "Al-An'aam",
            "name_en_translation": "The Cattle",
            "type": "Meccan"
        },
        {
            "id": 7,
            "number": 7,
            "name_ar": "سورة الأعراف",
            "name_en": "Al-A'raaf",
            "name_en_translation": "The Heights",
            "type": "Meccan"
        },
        {
            "id": 8,
            "number": 8,
            "name_ar": "سورة الأنفال",
            "name_en": "Al-Anfaal",
            "name_en_translation": "The Spoils of War",
            "type": "Medinan"
        },
        {
            "id": 9,
            "number": 9,
            "name_ar": "سورة التوبة",
            "name_en": "At-Tawba",
            "name_en_translation": "The Repentance",
            "type": "Medinan"
        },
        {
            "id": 10,
            "number": 10,
            "name_ar": "سورة يونس",
            "name_en": "Yunus",
            "name_en_translation": "Jonas",
            "type": "Meccan"
        },
        {
            "id": 11,
            "number": 11,
            "name_ar": "سورة هود",
            "name_en": "Hud",
            "name_en_translation": "Hud",
            "type": "Meccan"
        },
        {
            "id": 12,
            "number": 12,
            "name_ar": "سورة يوسف",
            "name_en": "Yusuf",
            "name_en_translation": "Joseph",
            "type": "Meccan"
        },
        {
            "id": 13,
            "number": 13,
            "name_ar": "سورة الرعد",
            "name_en": "Ar-Ra'd",
            "name_en_translation": "The Thunder",
            "type": "Medinan"
        },
        {
            "id": 14,
            "number": 14,
            "name_ar": "سورة ابراهيم",
            "name_en": "Ibrahim",
            "name_en_translation": "Abraham",
            "type": "Meccan"
        },
        {
            "id": 15,
            "number": 15,
            "name_ar": "سورة الحجر",
            "name_en": "Al-Hijr",
            "name_en_translation": "The Rock",
            "type": "Meccan"
        },
        {
            "id": 16,
            "number": 16,
            "name_ar": "سورة النحل",
            "name_en": "An-Nahl",
            "name_en_translation": "The Bee",
            "type": "Meccan"
        },
        {
            "id": 17,
            "number": 17,
            "name_ar": "سورة الإسراء",
            "name_en": "Al-Israa",
            "name_en_translation": "The Night Journey",
            "type": "Meccan"
        },
        {
            "id": 18,
            "number": 18,
            "name_ar": "سورة الكهف",
            "name_en": "Al-Kahf",
            "name_en_translation": "The Cave",
            "type": "Meccan"
        },
        {
            "id": 19,
            "number": 19,
            "name_ar": "سورة مريم",
            "name_en": "Maryam",
            "name_en_translation": "Mary",
            "type": "Meccan"
        },
        {
            "id": 20,
            "number": 20,
            "name_ar": "سورة طه",
            "name_en": "Taa-Haa",
            "name_en_translation": "Taa-Haa",
            "type": "Meccan"
        },
        {
            "id": 21,
            "number": 21,
            "name_ar": "سورة الأنبياء",
            "name_en": "Al-Anbiyaa",
            "name_en_translation": "The Prophets",
            "type": "Meccan"
        },
        {
            "id": 22,
            "number": 22,
            "name_ar": "سورة الحج",
            "name_en": "Al-Hajj",
            "name_en_translation": "The Pilgrimage",
            "type": "Medinan"
        },
        {
            "id": 23,
            "number": 23,
            "name_ar": "سورة المؤمنون",
            "name_en": "Al-Muminoon",
            "name_en_translation": "The Believers",
            "type": "Meccan"
        },
        {
            "id": 24,
            "number": 24,
            "name_ar": "سورة النور",
            "name_en": "An-Noor",
            "name_en_translation": "The Light",
            "type": "Medinan"
        },
        {
            "id": 25,
            "number": 25,
            "name_ar": "سورة الفرقان",
            "name_en": "Al-Furqaan",
            "name_en_translation": "The Criterion",
            "type": "Meccan"
        },
        {
            "id": 26,
            "number": 26,
            "name_ar": "سورة الشعراء",
            "name_en": "Ash-Shu'araa",
            "name_en_translation": "The Poets",
            "type": "Meccan"
        },
        {
            "id": 27,
            "number": 27,
            "name_ar": "سورة النمل",
            "name_en": "An-Naml",
            "name_en_translation": "The Ant",
            "type": "Meccan"
        },
        {
            "id": 28,
            "number": 28,
            "name_ar": "سورة القصص",
            "name_en": "Al-Qasas",
            "name_en_translation": "The Stories",
            "type": "Meccan"
        },
        {
            "id": 29,
            "number": 29,
            "name_ar": "سورة العنكبوت",
            "name_en": "Al-Ankaboot",
            "name_en_translation": "The Spider",
            "type": "Meccan"
        },
        {
            "id": 30,
            "number": 30,
            "name_ar": "سورة الروم",
            "name_en": "Ar-Room",
            "name_en_translation": "The Romans",
            "type": "Meccan"
        },
        {
            "id": 31,
            "number": 31,
            "name_ar": "سورة لقمان",
            "name_en": "Luqman",
            "name_en_translation": "Luqman",
            "type": "Meccan"
        },
        {
            "id": 32,
            "number": 32,
            "name_ar": "سورة السجدة",
            "name_en": "As-Sajda",
            "name_en_translation": "The Prostration",
            "type": "Meccan"
        },
        {
            "id": 33,
            "number": 33,
            "name_ar": "سورة الأحزاب",
            "name_en": "Al-Ahzaab",
            "name_en_translation": "The Clans",
            "type": "Medinan"
        },
        {
            "id": 34,
            "number": 34,
            "name_ar": "سورة سبإ",
            "name_en": "Saba",
            "name_en_translation": "Sheba",
            "type": "Meccan"
        },
        {
            "id": 35,
            "number": 35,
            "name_ar": "سورة فاطر",
            "name_en": "Faatir",
            "name_en_translation": "The Originator",
            "type": "Meccan"
        },
        {
            "id": 36,
            "number": 36,
            "name_ar": "سورة يس",
            "name_en": "Yaseen",
            "name_en_translation": "Yaseen",
            "type": "Meccan"
        },
        {
            "id": 37,
            "number": 37,
            "name_ar": "سورة الصافات",
            "name_en": "As-Saaffaat",
            "name_en_translation": "Those drawn up in Ranks",
            "type": "Meccan"
        },
        {
            "id": 38,
            "number": 38,
            "name_ar": "سورة ص",
            "name_en": "Saad",
            "name_en_translation": "The letter Saad",
            "type": "Meccan"
        },
        {
            "id": 39,
            "number": 39,
            "name_ar": "سورة الزمر",
            "name_en": "Az-Zumar",
            "name_en_translation": "The Groups",
            "type": "Meccan"
        },
        {
            "id": 40,
            "number": 40,
            "name_ar": "سورة غافر",
            "name_en": "Ghafir",
            "name_en_translation": "The Forgiver",
            "type": "Meccan"
        },
        {
            "id": 41,
            "number": 41,
            "name_ar": "سورة فصلت",
            "name_en": "Fussilat",
            "name_en_translation": "Explained in detail",
            "type": "Meccan"
        },
        {
            "id": 42,
            "number": 42,
            "name_ar": "سورة الشورى",
            "name_en": "Ash-Shura",
            "name_en_translation": "Consultation",
            "type": "Meccan"
        },
        {
            "id": 43,
            "number": 43,
            "name_ar": "سورة الزخرف",
            "name_en": "Az-Zukhruf",
            "name_en_translation": "Ornaments of gold",
            "type": "Meccan"
        },
        {
            "id": 44,
            "number": 44,
            "name_ar": "سورة الدخان",
            "name_en": "Ad-Dukhaan",
            "name_en_translation": "The Smoke",
            "type": "Meccan"
        },
        {
            "id": 45,
            "number": 45,
            "name_ar": "سورة الجاثية",
            "name_en": "Al-Jaathiya",
            "name_en_translation": "Crouching",
            "type": "Meccan"
        },
        {
            "id": 46,
            "number": 46,
            "name_ar": "سورة الأحقاف",
            "name_en": "Al-Ahqaf",
            "name_en_translation": "The Dunes",
            "type": "Meccan"
        },
        {
            "id": 47,
            "number": 47,
            "name_ar": "سورة محمد",
            "name_en": "Muhammad",
            "name_en_translation": "Muhammad",
            "type": "Medinan"
        },
        {
            "id": 48,
            "number": 48,
            "name_ar": "سورة الفتح",
            "name_en": "Al-Fath",
            "name_en_translation": "The Victory",
            "type": "Medinan"
        },
        {
            "id": 49,
            "number": 49,
            "name_ar": "سورة الحجرات",
            "name_en": "Al-Hujuraat",
            "name_en_translation": "The Inner Apartments",
            "type": "Medinan"
        },
        {
            "id": 50,
            "number": 50,
            "name_ar": "سورة ق",
            "name_en": "Qaaf",
            "name_en_translation": "The letter Qaaf",
            "type": "Meccan"
        },
        {
            "id": 51,
            "number": 51,
            "name_ar": "سورة الذاريات",
            "name_en": "Adh-Dhaariyat",
            "name_en_translation": "The Winnowing Winds",
            "type": "Meccan"
        },
        {
            "id": 52,
            "number": 52,
            "name_ar": "سورة الطور",
            "name_en": "At-Tur",
            "name_en_translation": "The Mount",
            "type": "Meccan"
        },
        {
            "id": 53,
            "number": 53,
            "name_ar": "سورة النجم",
            "name_en": "An-Najm",
            "name_en_translation": "The Star",
            "type": "Meccan"
        },
        {
            "id": 54,
            "number": 54,
            "name_ar": "سورة القمر",
            "name_en": "Al-Qamar",
            "name_en_translation": "The Moon",
            "type": "Meccan"
        },
        {
            "id": 55,
            "number": 55,
            "name_ar": "سورة الرحمن",
            "name_en": "Ar-Rahmaan",
            "name_en_translation": "The Beneficent",
            "type": "Medinan"
        },
        {
            "id": 56,
            "number": 56,
            "name_ar": "سورة الواقعة",
            "name_en": "Al-Waaqia",
            "name_en_translation": "The Inevitable",
            "type": "Meccan"
        },
        {
            "id": 57,
            "number": 57,
            "name_ar": "سورة الحديد",
            "name_en": "Al-Hadid",
            "name_en_translation": "The Iron",
            "type": "Medinan"
        },
        {
            "id": 58,
            "number": 58,
            "name_ar": "سورة المجادلة",
            "name_en": "Al-Mujaadila",
            "name_en_translation": "The Pleading Woman",
            "type": "Medinan"
        },
        {
            "id": 59,
            "number": 59,
            "name_ar": "سورة الحشر",
            "name_en": "Al-Hashr",
            "name_en_translation": "The Exile",
            "type": "Medinan"
        },
        {
            "id": 60,
            "number": 60,
            "name_ar": "سورة الممتحنة",
            "name_en": "Al-Mumtahana",
            "name_en_translation": "She that is to be examined",
            "type": "Medinan"
        },
        {
            "id": 61,
            "number": 61,
            "name_ar": "سورة الصف",
            "name_en": "As-Saff",
            "name_en_translation": "The Ranks",
            "type": "Medinan"
        },
        {
            "id": 62,
            "number": 62,
            "name_ar": "سورة الجمعة",
            "name_en": "Al-Jumu'a",
            "name_en_translation": "Friday",
            "type": "Medinan"
        },
        {
            "id": 63,
            "number": 63,
            "name_ar": "سورة المنافقون",
            "name_en": "Al-Munaafiqoon",
            "name_en_translation": "The Hypocrites",
            "type": "Medinan"
        },
        {
            "id": 64,
            "number": 64,
            "name_ar": "سورة التغابن",
            "name_en": "At-Taghaabun",
            "name_en_translation": "Mutual Disillusion",
            "type": "Medinan"
        },
        {
            "id": 65,
            "number": 65,
            "name_ar": "سورة الطلاق",
            "name_en": "At-Talaaq",
            "name_en_translation": "Divorce",
            "type": "Medinan"
        },
        {
            "id": 66,
            "number": 66,
            "name_ar": "سورة التحريم",
            "name_en": "At-Tahrim",
            "name_en_translation": "The Prohibition",
            "type": "Medinan"
        },
        {
            "id": 67,
            "number": 67,
            "name_ar": "سورة الملك",
            "name_en": "Al-Mulk",
            "name_en_translation": "The Sovereignty",
            "type": "Meccan"
        },
        {
            "id": 68,
            "number": 68,
            "name_ar": "سورة القلم",
            "name_en": "Al-Qalam",
            "name_en_translation": "The Pen",
            "type": "Meccan"
        },
        {
            "id": 69,
            "number": 69,
            "name_ar": "سورة الحاقة",
            "name_en": "Al-Haaqqa",
            "name_en_translation": "The Reality",
            "type": "Meccan"
        },
        {
            "id": 70,
            "number": 70,
            "name_ar": "سورة المعارج",
            "name_en": "Al-Ma'aarij",
            "name_en_translation": "The Ascending Stairways",
            "type": "Meccan"
        },
        {
            "id": 71,
            "number": 71,
            "name_ar": "سورة نوح",
            "name_en": "Nooh",
            "name_en_translation": "Noah",
            "type": "Meccan"
        },
        {
            "id": 72,
            "number": 72,
            "name_ar": "سورة الجن",
            "name_en": "Al-Jinn",
            "name_en_translation": "The Jinn",
            "type": "Meccan"
        },
        {
            "id": 73,
            "number": 73,
            "name_ar": "سورة المزمل",
            "name_en": "Al-Muzzammil",
            "name_en_translation": "The Enshrouded One",
            "type": "Meccan"
        },
        {
            "id": 74,
            "number": 74,
            "name_ar": "سورة المدثر",
            "name_en": "Al-Muddaththir",
            "name_en_translation": "The Cloaked One",
            "type": "Meccan"
        },
        {
            "id": 75,
            "number": 75,
            "name_ar": "سورة القيامة",
            "name_en": "Al-Qiyaama",
            "name_en_translation": "The Resurrection",
            "type": "Meccan"
        },
        {
            "id": 76,
            "number": 76,
            "name_ar": "سورة الانسان",
            "name_en": "Al-Insaan",
            "name_en_translation": "Man",
            "type": "Medinan"
        },
        {
            "id": 77,
            "number": 77,
            "name_ar": "سورة المرسلات",
            "name_en": "Al-Mursalaat",
            "name_en_translation": "The Emissaries",
            "type": "Meccan"
        },
        {
            "id": 78,
            "number": 78,
            "name_ar": "سورة النبإ",
            "name_en": "An-Naba",
            "name_en_translation": "The Announcement",
            "type": "Meccan"
        },
        {
            "id": 79,
            "number": 79,
            "name_ar": "سورة النازعات",
            "name_en": "An-Naazi'aat",
            "name_en_translation": "Those who drag forth",
            "type": "Meccan"
        },
        {
            "id": 80,
            "number": 80,
            "name_ar": "سورة عبس",
            "name_en": "Abasa",
            "name_en_translation": "He frowned",
            "type": "Meccan"
        },
        {
            "id": 81,
            "number": 81,
            "name_ar": "سورة التكوير",
            "name_en": "At-Takwir",
            "name_en_translation": "The Overthrowing",
            "type": "Meccan"
        },
        {
            "id": 82,
            "number": 82,
            "name_ar": "سورة الإنفطار",
            "name_en": "Al-Infitaar",
            "name_en_translation": "The Cleaving",
            "type": "Meccan"
        },
        {
            "id": 83,
            "number": 83,
            "name_ar": "سورة المطففين",
            "name_en": "Al-Mutaffifin",
            "name_en_translation": "Defrauding",
            "type": "Meccan"
        },
        {
            "id": 84,
            "number": 84,
            "name_ar": "سورة الإنشقاق",
            "name_en": "Al-Inshiqaaq",
            "name_en_translation": "The Splitting Open",
            "type": "Meccan"
        },
        {
            "id": 85,
            "number": 85,
            "name_ar": "سورة البروج",
            "name_en": "Al-Burooj",
            "name_en_translation": "The Constellations",
            "type": "Meccan"
        },
        {
            "id": 86,
            "number": 86,
            "name_ar": "سورة الطارق",
            "name_en": "At-Taariq",
            "name_en_translation": "The Morning Star",
            "type": "Meccan"
        },
        {
            "id": 87,
            "number": 87,
            "name_ar": "سورة الأعلى",
            "name_en": "Al-A'laa",
            "name_en_translation": "The Most High",
            "type": "Meccan"
        },
        {
            "id": 88,
            "number": 88,
            "name_ar": "سورة الغاشية",
            "name_en": "Al-Ghaashiya",
            "name_en_translation": "The Overwhelming",
            "type": "Meccan"
        },
        {
            "id": 89,
            "number": 89,
            "name_ar": "سورة الفجر",
            "name_en": "Al-Fajr",
            "name_en_translation": "The Dawn",
            "type": "Meccan"
        },
        {
            "id": 90,
            "number": 90,
            "name_ar": "سورة البلد",
            "name_en": "Al-Balad",
            "name_en_translation": "The City",
            "type": "Meccan"
        },
        {
            "id": 91,
            "number": 91,
            "name_ar": "سورة الشمس",
            "name_en": "Ash-Shams",
            "name_en_translation": "The Sun",
            "type": "Meccan"
        },
        {
            "id": 92,
            "number": 92,
            "name_ar": "سورة الليل",
            "name_en": "Al-Lail",
            "name_en_translation": "The Night",
            "type": "Meccan"
        },
        {
            "id": 93,
            "number": 93,
            "name_ar": "سورة الضحى",
            "name_en": "Ad-Dhuhaa",
            "name_en_translation": "The Morning Hours",
            "type": "Meccan"
        },
        {
            "id": 94,
            "number": 94,
            "name_ar": "سورة الشرح",
            "name_en": "Ash-Sharh",
            "name_en_translation": "The Consolation",
            "type": "Meccan"
        },
        {
            "id": 95,
            "number": 95,
            "name_ar": "سورة التين",
            "name_en": "At-Tin",
            "name_en_translation": "The Fig",
            "type": "Meccan"
        },
        {
            "id": 96,
            "number": 96,
            "name_ar": "سورة العلق",
            "name_en": "Al-Alaq",
            "name_en_translation": "The Clot",
            "type": "Meccan"
        },
        {
            "id": 97,
            "number": 97,
            "name_ar": "سورة القدر",
            "name_en": "Al-Qadr",
            "name_en_translation": "The Power, Fate",
            "type": "Meccan"
        },
        {
            "id": 98,
            "number": 98,
            "name_ar": "سورة البينة",
            "name_en": "Al-Bayyina",
            "name_en_translation": "The Evidence",
            "type": "Medinan"
        },
        {
            "id": 99,
            "number": 99,
            "name_ar": "سورة الزلزلة",
            "name_en": "Az-Zalzala",
            "name_en_translation": "The Earthquake",
            "type": "Medinan"
        },
        {
            "id": 100,
            "number": 100,
            "name_ar": "سورة العاديات",
            "name_en": "Al-Aadiyaat",
            "name_en_translation": "The Chargers",
            "type": "Meccan"
        },
        {
            "id": 101,
            "number": 101,
            "name_ar": "سورة القارعة",
            "name_en": "Al-Qaari'a",
            "name_en_translation": "The Calamity",
            "type": "Meccan"
        },
        {
            "id": 102,
            "number": 102,
            "name_ar": "سورة التكاثر",
            "name_en": "At-Takaathur",
            "name_en_translation": "Competition",
            "type": "Meccan"
        },
        {
            "id": 103,
            "number": 103,
            "name_ar": "سورة العصر",
            "name_en": "Al-Asr",
            "name_en_translation": "The Declining Day, Epoch",
            "type": "Meccan"
        },
        {
            "id": 104,
            "number": 104,
            "name_ar": "سورة الهمزة",
            "name_en": "Al-Humaza",
            "name_en_translation": "The Traducer",
            "type": "Meccan"
        },
        {
            "id": 105,
            "number": 105,
            "name_ar": "سورة الفيل",
            "name_en": "Al-Fil",
            "name_en_translation": "The Elephant",
            "type": "Meccan"
        },
        {
            "id": 106,
            "number": 106,
            "name_ar": "سورة قريش",
            "name_en": "Quraish",
            "name_en_translation": "Quraysh",
            "type": "Meccan"
        },
        {
            "id": 107,
            "number": 107,
            "name_ar": "سورة الماعون",
            "name_en": "Al-Maa'un",
            "name_en_translation": "Almsgiving",
            "type": "Meccan"
        },
        {
            "id": 108,
            "number": 108,
            "name_ar": "سورة الكوثر",
            "name_en": "Al-Kawthar",
            "name_en_translation": "Abundance",
            "type": "Meccan"
        },
        {
            "id": 109,
            "number": 109,
            "name_ar": "سورة الكافرون",
            "name_en": "Al-Kaafiroon",
            "name_en_translation": "The Disbelievers",
            "type": "Meccan"
        },
        {
            "id": 110,
            "number": 110,
            "name_ar": "سورة النصر",
            "name_en": "An-Nasr",
            "name_en_translation": "Divine Support",
            "type": "Medinan"
        },
        {
            "id": 111,
            "number": 111,
            "name_ar": "سورة المسد",
            "name_en": "Al-Masad",
            "name_en_translation": "The Palm Fibre",
            "type": "Meccan"
        },
        {
            "id": 112,
            "number": 112,
            "name_ar": "سورة الإخلاص",
            "name_en": "Al-Ikhlaas",
            "name_en_translation": "Sincerity",
            "type": "Meccan"
        },
        {
            "id": 113,
            "number": 113,
            "name_ar": "سورة الفلق",
            "name_en": "Al-Falaq",
            "name_en_translation": "The Dawn",
            "type": "Meccan"
        },
        {
            "id": 114,
            "number": 114,
            "name_ar": "سورة الناس",
            "name_en": "An-Naas",
            "name_en_translation": "Mankind",
            "type": "Meccan"
        }
    ];
}
