$(document).ready(function () {
    console.log("Ready");

    //$("#s2_col").css("bottom","50vh")
    const h1_col = document.getElementById("h1_col");
    const h2_col = document.getElementById("h2_col");
    const m1_col = document.getElementById("m1_col");
    const m2_col = document.getElementById("m2_col");
    const s1_col = document.getElementById("s1_col");
    const s2_col = document.getElementById("s2_col");

    function timeChanged(time) {
        var hours = time.getHours();
        var minutes = time.getMinutes();
        var seconds = time.getSeconds();
        var ss_str = seconds.toString();
        var mm_str = minutes.toString();
        var hh_str = hours.toString();


        console.log("Hours=" + hh_str + " || min=" + mm_str + " || sec=" + ss_str);


        var h1 = hh_str[1] == undefined ? 0 : hh_str[0];
        var h2 = hh_str[1] == undefined ? hh_str[0] : hh_str[1];
        var m1 = mm_str[1] == undefined ? 0 : mm_str[0];
        var m2 = mm_str[1] == undefined ? mm_str[0] : mm_str[1];
        var s1 = ss_str[1] == undefined ? 0 : ss_str[0];
        var s2 = ss_str[1] == undefined ? ss_str[0] : ss_str[1];

        setClass_on_Children(h1_col.children, h1);
        set_holder_height(h1_col, h1)

        setClass_on_Children(h2_col.children, h2);
        set_holder_height(h2_col, h2)

        setClass_on_Children(m1_col.children, m1);
        set_holder_height(m1_col, m1)

        setClass_on_Children(m2_col.children, m2);
        set_holder_height(m2_col, m2)

        setClass_on_Children(s1_col.children, s1);
        set_holder_height(s1_col, s1)

        setClass_on_Children(s2_col.children, s2);
        set_holder_height(s2_col, s2)


    }

    setInterval(function timeChecker() {
        var oldTime = timeChecker.oldTime || new Date(),
            newTime = new Date(),
            timeDiff = newTime - oldTime;



        timeChecker.oldTime = newTime;

        if (Math.abs(timeDiff) >= 100) { // Five second leniency
            timeChanged(newTime);
        }
    }, 1000);

    function setClass_on_Children(children, index) {
        for (i = 0; i < children.length; i++) {
            if (i == index) {
                $(children[i]).addClass("highlight");
            }
            else {
                $(children[i]).removeClass("highlight")
            }
        }
    }

    function set_holder_height(holder, ht) {
        ht = 50 - (ht * 4.7);
        $(holder).css("top", ht + "vh")
        //console.log("Holder="+holder.id+" bottom="+ht+"vh");
    }

})
