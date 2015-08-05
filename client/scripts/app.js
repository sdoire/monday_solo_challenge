var people = [];
var num;
var teamNum;
$(document).ready(function (){
    $.ajax({
        url: "/data",
        success: function(data){
            console.log(data);
            $.each(data, function() {
                people.push(this.name);
            });
        }
    });
    /**
     * returns a randomly shuffled array
     * @param array
     * @returns {*}
     */
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex ;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    /**
     * Adds correct number of groups to DOM
     * @param num
     */
    function addGroup(num){
        for (var i = 1; i <= num; i++) {
            $('body').children().last().append("<div class='group' data-index="+i+ ">" + "<h1>" + "Group: " + i + "</h1>" + "</div>");
        }
    }

    /**
     * Assigns people to groups
     * @param num
     */
    function assignTeam(num){
        teamNum=1;

        for (var i = 0; i < people.length; i++){
            if (teamNum > num){
                teamNum = 1;
            }
            $('[data-index="'+teamNum+'"]').append("<p>" + people[i] + "</p>");
            $('[data-index="'+teamNum+'"]').children().last().hide().delay(300*i).fadeIn();
            teamNum++;
        }

    }

    /**
     * removes active class from all buttons
     */
    function clearClass(){
        $('.1').removeClass('active');
        $('.2').removeClass('active');
        $('.3').removeClass('active');
        $('.4').removeClass('active');
        $('.5').removeClass('active');
        $('.6').removeClass('active');
        $('.7').removeClass('active');
        $('.8').removeClass('active');
        $('.9').removeClass('active');
        $('.10').removeClass('active');
    }

    $('body').on('click', '#numTeams', function(){
        clearClass();
        num = $(this).text();
        $(this).addClass('active');
        return num;
    });

    $('body').on('click', '#btn-random', function(){
        shuffle(people);
        $('.people').children().remove();
        addGroup(num);
        assignTeam(num);
    });

    //I'm leaving the code below to remind myself what I started out with...

    //$('body').on('click', '#btn-random', function(){
    //    $('.people').children().remove();
    //    var el = $('body').children().last();
    //
    //    shuffle(people);
    //    switch(num) {
    //        case "2":
    //            el.append("<div class='group'><p>Group 1:</p>" + "<p>" + people[0] + "</p>" + "<p>" + people[1] + "</p>" + "<p>" + people[2] + "</p>" + "<p>" + people[3] + "</p>" + "<p>" + people[4] + "</p>" + "<p>" + people[5] + "</p>" + "<p>" + people[6] + "</p>" + "<p>" + people[7] + "</p>" + "<p>" + people[8] + "</p>" + "<p>" + people[9] + "</p>" + "<p>" + people[10] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 2:</p>" + "<p>" + people[11] + "</p>" + "<p>" + people[12] + "</p>" + "<p>" + people[13] + "</p>" + "<p>" + people[14] + "</p>" + "<p>" + people[15] + "</p>" + "<p>" + people[16] + "</p>" + "<p>" + people[17] + "</p>" + "<p>" + people[18] + "</p>" + "<p>" + people[19] + "</p>" + "<p>" + people[20] + "</p>" + "<p>" + people[21] + "</p>" + "</div>");
    //            break;
    //        case "3":
    //            el.append("<div class='group'><p>Group 1:</p>" + "<p>" + people[0] + "</p>" + "<p>" + people[1] + "</p>" + "<p>" + people[2] + "</p>" + "<p>" + people[3] + "</p>" + "<p>" + people[4] + "</p>" + "<p>" + people[5] + "</p>" + "<p>" + people[6] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 2:</p>" + "<p>" + people[7] + "</p>" + "<p>" + people[8] + "</p>" + "<p>" + people[9] + "</p>" + "<p>" + people[10] + "</p>" + "<p>" + people[11] + "</p>" + "<p>" + people[12] + "</p>" + "<p>" + people[13] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 3:</p>" + "<p>" + people[14] + "</p>" + "<p>" + people[15] + "</p>" + "<p>" + people[16] + "</p>" + "<p>" + people[17] + "</p>" + "<p>" + people[18] + "</p>" + "<p>" + people[19] + "</p>" + "<p>" + people[20] + "</p>" + "<p>" + people[21] + "</p>" + "</div>");
    //            break;
    //        case "4":
    //            el.append("<div class='group'><p>Group 1:</p>" + "<p>" + people[0] + "</p>" + "<p>" + people[1] + "</p>" + "<p>" + people[2] + "</p>" + "<p>" + people[3] + "</p>" + "<p>" + people[4] + "</p>" + "<p>" + people[5] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 2:</p>" + "<p>" + people[6] + "</p>" + "<p>" + people[7] + "</p>" + "<p>" + people[8] + "</p>" + "<p>" + people[9] + "</p>" + "<p>" + people[10] + "</p>" + "<p>" + people[11] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 3:</p>" + "<p>" + people[12] + "</p>" + "<p>" + people[13] + "</p>" + "<p>" + people[14] + "</p>" + "<p>" + people[15] + "</p>" + "<p>" + people[16] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 4:</p>" + "<p>" + people[17] + "</p>" + "<p>" + people[18] + "</p>" + "<p>" + people[19] + "</p>" + "<p>" + people[20] + "</p>" + "<p>" + people[21] + "</p>" + "</div>");
    //            break;
    //        case "5":
    //            el.append("<div class='group'><p>Group 1:</p>" + "<p>" + people[0] + "</p>" + "<p>" + people[1] + "</p>" + "<p>" + people[2] + "</p>" + "<p>" + people[3] + "</p>" + "<p>" + people[4] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 2:</p>" + "<p>" + people[5] + "</p>" + "<p>" + people[6] + "</p>" + "<p>" + people[7] + "</p>" + "<p>" + people[8] + "</p>" + "<p>" + people[9] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 3:</p>" + "<p>" + people[10] + "</p>" + "<p>" + people[11] + "</p>" + "<p>" + people[12] + "</p>" + "<p>" + people[13] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 4:</p>" + "<p>" + people[14] + "</p>" + "<p>" + people[15] + "</p>" + "<p>" + people[16] + "</p>" + "<p>" + people[17] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 5:</p>" + "<p>" + people[18] + "</p>" + "<p>" + people[19] + "</p>" + "<p>" + people[20] + "</p>" + "<p>" + people[21] + "</p>" + "</div>");
    //            break;
    //        case "6":
    //            el.append("<div class='group'><p>Group 1:</p>" + "<p>" + people[0] + "</p>" + "<p>" + people[1] + "</p>" + "<p>" + people[2] + "</p>" + "<p>" + people[3] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 2:</p>" + "<p>" + people[4] + "</p>" + "<p>" + people[5] + "</p>" + "<p>" + people[6] + "</p>" + "<p>" + people[7] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 3:</p>" + "<p>" + people[8] + "</p>" + "<p>" + people[9] + "</p>" + "<p>" + people[10] + "</p>" + "<p>" + people[11] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 4:</p>" + "<p>" + people[12] + "</p>" + "<p>" + people[13] + "</p>" + "<p>" + people[14] + "</p>" + "<p>" + people[15] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 5:</p>" + "<p>" + people[16] + "</p>" + "<p>" + people[17] + "</p>" + "<p>" + people[18] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 6:</p>" + "<p>" + people[19] + "</p>" + "<p>" + people[20] + "</p>" + "<p>" + people[21] + "</p>" + "</div>");
    //            break;
    //        case "7":
    //            el.append("<div class='group'><p>Group 1:</p>" + "<p>" + people[0] + "</p>" + "<p>" + people[1] + "</p>" + "<p>" + people[2] + "</p>" + "<p>" + people[3] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 2:</p>" + "<p>" + people[4] + "</p>" + "<p>" + people[5] + "</p>" + "<p>" + people[6] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 3:</p>" + "<p>" + people[7] + "</p>" + "<p>" + people[8] + "</p>" + "<p>" + people[9] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 4:</p>" + "<p>" + people[10] + "</p>" + "<p>" + people[11] + "</p>" + "<p>" + people[12] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 5:</p>" + "<p>" + people[13] + "</p>" + "<p>" + people[14] + "</p>" + "<p>" + people[15] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 6:</p>" + "<p>" + people[16] + "</p>" + "<p>" + people[17] + "</p>" + "<p>" + people[18] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 7:</p>" + "<p>" + people[19] + "</p>" + "<p>" + people[20] + "</p>" + "<p>" + people[21] + "</p>" + "</div>");
    //            break;
    //        case "8":
    //            el.append("<div class='group'><p>Group 1:</p>" + "<p>" + people[0] + "</p>" + "<p>" + people[1] + "</p>" + "<p>" + people[2] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 2:</p>" + "<p>" + people[3] + "</p>" + "<p>" + people[4] + "</p>" + "<p>" + people[5] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 3:</p>" + "<p>" + people[6] + "</p>" + "<p>" + people[7] + "</p>" + "<p>" + people[8] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 4:</p>" + "<p>" + people[9] + "</p>" + "<p>" + people[10] + "</p>" + "<p>" + people[11] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 5:</p>" + "<p>" + people[12] + "</p>" + "<p>" + people[13] + "</p>" + "<p>" + people[14] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 6:</p>" + "<p>" + people[15] + "</p>" + "<p>" + people[16] + "</p>" + "<p>" + people[17] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 7:</p>" + "<p>" + people[18] + "</p>" + "<p>" + people[19] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 8:</p>" + "<p>" + people[20] + "</p>" + "<p>" + people[21] + "</p>" + "</div>");
    //            break;
    //        case "9":
    //            el.append("<div class='group'><p>Group 1:</p>" + "<p>" + people[0] + "</p>" + "<p>" + people[1] + "</p>" + "<p>" + people[2] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 2:</p>" + "<p>" + people[3] + "</p>" + "<p>" + people[4] + "</p>" + "<p>" + people[5] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 3:</p>" + "<p>" + people[6] + "</p>" + "<p>" + people[7] + "</p>" + "<p>" + people[8] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 4:</p>" + "<p>" + people[9] + "</p>" + "<p>" + people[10] + "</p>" + "<p>" + people[11] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 5:</p>" + "<p>" + people[12] + "</p>" + "<p>" + people[13] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 6:</p>" + "<p>" + people[14] + "</p>" + "<p>" + people[15] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 7:</p>" + "<p>" + people[16] + "</p>" + "<p>" + people[17] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 8:</p>" + "<p>" + people[18] + "</p>" + "<p>" + people[19] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 9:</p>" + "<p>" + people[20] + "</p>" + "<p>" + people[21] + "</p>" + "</div>");
    //            break;
    //        case "10":
    //            el.append("<div class='group'><p>Group 1:</p>" + "<p>" + people[0] + "</p>" + "<p>" + people[1] + "</p>" + "<p>" + people[2] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 2:</p>" + "<p>" + people[3] + "</p>" + "<p>" + people[4] + "</p>" + "<p>" + people[5] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 3:</p>" + "<p>" + people[6] + "</p>" + "<p>" + people[7] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 4:</p>" + "<p>" + people[8] + "</p>" + "<p>" + people[9] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 5:</p>" + "<p>" + people[10] + "</p>" + "<p>" + people[11] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 6:</p>" + "<p>" + people[12] + "</p>" + "<p>" + people[13] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 7:</p>" + "<p>" + people[14] + "</p>" + "<p>" + people[15] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 8:</p>" + "<p>" + people[16] + "</p>" + "<p>" + people[17] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 9:</p>" + "<p>" + people[18] + "</p>" + "<p>" + people[19] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 10:</p>" + "<p>" + people[20] + "</p>" + "<p>" + people[21] + "</p>" + "</div>");
    //            break;
    //        case "11":
    //            el.append("<div class='group'><p>Group 1:</p>" + "<p>" + people[0] + "</p>" + "<p>" + people[1] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 2:</p>" + "<p>" + people[2] + "</p>" + "<p>" + people[3] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 3:</p>" + "<p>" + people[4] + "</p>" + "<p>" + people[5] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 4:</p>" + "<p>" + people[6] + "</p>" + "<p>" + people[7] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 5:</p>" + "<p>" + people[8] + "</p>" + "<p>" + people[9] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 6:</p>" + "<p>" + people[10] + "</p>" + "<p>" + people[11] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 7:</p>" + "<p>" + people[12] + "</p>" + "<p>" + people[13] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 8:</p>" + "<p>" + people[14] + "</p>" + "<p>" + people[15] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 9:</p>" + "<p>" + people[16] + "</p>" + "<p>" + people[17] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 10:</p>" + "<p>" + people[18] + "</p>" + "<p>" + people[19] + "</p>" + "</div>");
    //            el.append("<div class='group'><p>Group 11:</p>" + "<p>" + people[20] + "</p>" + "<p>" + people[21] + "</p>" + "</div>");
    //            break;
    //    }
    //});

});
