angular.module('Monitor.services', [])
    .factory('estimateFactory', function () {
        var estFac = {};
        var estimate = [
           /* Estimated energy requirements */
            {
                "age": 1,
                "weight": [4.4, 4.2],
                "EER": [2000, 1800]
}, {
                "age": 2,
                "weight": [5.3, 4.9],
                "EER": [2400, 2100]
}, {
                "age": 3,
                "weight": [6.0, 5.5],
                "EER": [2400, 2200]
}, {
                "age": 4,
                "weight": [6.7, 6.1],
                "EER": [2400, 2200]
}, {
                "age": 5,
                "weight": [7.3, 6.7],
                "EER": [2500, 2300]
}, {
                "age": 6,
                "weight": [7.9, 7.2],
                "EER": [2700, 2500]
}, {
                "age": 7,
                "weight": [8.4, 7.7],
                "EER": [2800, 2500]
}, {
                "age": 8,
                "weight": [8.9, 8.1],
                "EER": [3000, 2700]
}, {
                "age": 9,
                "weight": [9.3, 8.5],
                "EER": [3100, 2800]
}, {
                "age": 10,
                "weight": [9.7, 8.9],
                "EER": [3300, 3000]
}
        ];

        estFac.getEstimates = function () {
            return estimate;
        }

        return estFac;
    })

.factory('plansFactory', function () {
    var planFac = {};

    var plans = [
        {
            title: 'Plan One',
            id: 1,
            "income": "Income Less than Rs 2.5 Lac"
        },
        {
            title: 'Plan Two',
            id: 2,
            "income": "Income Between Rs 2.5 - 5.0 Lac"
        },
        {
            title: 'Plan Three',
            id: 3,
            "income": "Income Greater than Rs 5.0 Lac "
        }
    ];

    planFac.getPlans = function () {
        return plans;
    }

    planFac.getPlanDetail = function () {

        return {
            "grains": "Rice, Barley, Wheat, Millet, Oats, Flax",
            "fruits": "Avacado, Apricots, Apples, Blueberries, Kiwi, Mangoes, Plums, Prunes, Papaya, Peaches, Dates",
            "vegetables": "Squash, brocolli, Green Beans, Sweet Potato, Carrots"
        }
    }

    return planFac;
})

.factory('Chats', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var chats = [{
        id: 0,
        name: 'Ben Sparrow',
        lastText: 'Can I feed solid food to 6 months old baby ?',
        face: 'img/ben.png'
  }, {
        id: 1,
        name: 'Max Lynx',
        lastText: 'Is cerelac wheat good for 6+ months baby',
        face: 'img/max.png'
  }, {
        id: 2,
        name: 'Adam Bradleyson',
        lastText: 'Hello Doc , Need some info ..',
        face: 'img/adam.jpg'
  }, {
        id: 3,
        name: 'Perry Governor',
        lastText: 'I should buy some milk',
        face: 'img/perry.png'
  }, {
        id: 4,
        name: 'Mike Harrington',
        lastText: 'Thanks for your advice .',
        face: 'img/mike.png'
  }];

    return {
        all: function () {
            return chats;
        },
        remove: function (chat) {
            chats.splice(chats.indexOf(chat), 1);
        },
        get: function (chatId) {
            for (var i = 0; i < chats.length; i++) {
                if (chats[i].id === parseInt(chatId)) {
                    return chats[i];
                }
            }
            return null;
        }
    };
});
