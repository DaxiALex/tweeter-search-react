var dotenv = require('dotenv').config();
var twitter = require('twitter');

module.exports = function(res, parameter, resultType) {

    var client = new twitter({
        consumer_key: 'w20Yzt1wr0gGpDpT8DfTVzfbI',
        consumer_secret: 'mKqs9XiPo4PdN7SfDh98S0xw5RrfVys9aIC1pjHOoi1lNNmIzI',
        access_token_key: '922580117888688128-KPRmfBxJ0sNlt7qw5MJv5drNIlXazuE',
        access_token_secret: 'HWUqPKjz6lmJyjI55xzPl72t7wbL82fSPwAf3H2fQ5kTt'
    });



    var params = {q: parameter, count: 22, result_type: resultType};

    client.get('search/tweets.json', params, function(error, tweets, response) {

        if (!error) {

            var results = {}
            var key = 'Results';
            results[key] = [];

            for (var i = 0; i < tweets.statuses.length; i++) {

                var tweet = tweets.statuses[i]

                var profileImageURL = tweet.user.profile_image_url
                var bigProfileImageURL = profileImageURL.replace(/_normal/, '');

                var tweetContent = {
                    id: tweet.id_str,
                    screen_name: tweet.user.screen_name,
                    name: tweet.user.name,
                    profile_image_url: bigProfileImageURL,
                    text: tweet.text,
                    created_at: tweet.created_at
                }

                results[key].push(tweetContent);
            }

            res.send(JSON.stringify(results));
        }

    });

}
