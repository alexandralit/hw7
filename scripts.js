let Teapot = function() {
    this.getInform = function() {
        if (confirm('Включить чайник?')) {
            this.type = confirm('Ваш чайник электрический?');

            if (this.type) {
                this.power = +prompt('Введите мощность чайника:');
                this.water = +prompt('Введите количество воды в чайнике:');
                this.temperature = +prompt('Введите температуру воды:');

                if (isNaN(this.power) || isNaN(this.water) || isNaN(this.temperature)) {
                    alert('Ошибка. Введите число');
                    this.getInform();
                } else {
                    this.timeElec();
                }
            } else {
                this.water = +prompt('Введите количество воды в чайнике:');
                this.temperature = +prompt('Введите температуру воды:');

                if (isNaN(this.water) || isNaN(this.temperature)) {
                    alert('Ошибка. Введите число');
                    this.getInform();
                } else {
                    this.time();
                }
            }
        } else {
            console.log('Чайник выключен');
        }
    };

    this.timeElec = function() {
        this.t = (4200 * this.water * (100 - this.temperature)) / this.power / 60;
        console.log('Время закипания воды в чайнике: ' + (this.t).toFixed(2) + ' мин');
    };

    this.time = function() {
        this.t = (4200 * this.water * (100 - this.temperature)) / 1700 / 60;
        console.log('Время закипания воды в чайнике: ' + (this.t).toFixed(2) + ' мин');
    };
};

let teapot = new Teapot();

teapot.getInform();