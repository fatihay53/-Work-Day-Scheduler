$('#currentDay').html(`${moment().format("dddd MMM Do")}`)

    function backgrouncolor() {
      for (var i = 0; i < 9; i++) {
        var inputtime = parseInt($('.hour').get(i).id)

        var currentTime = parseInt(moment().format('H'))


        if (inputtime < currentTime) {
          $(`#${i}${i}`).addClass('past');
        }
        else if (inputtime > currentTime) {
          $(`#${i}${i}`).addClass('future');
        }
        else {
          $(`#${i}${i}`).addClass('present');
        }

      }
    }
    backgrouncolor()

    //runs on click

    for (i = 0; i < 9; i++) {
      document.querySelector(`.button${i}`).addEventListener('click', abc)
    }

    function abc() {

      var form = {
        column1: document.getElementById('00').value,
        column2: document.getElementById('11').value,
        column3: document.getElementById('22').value,
        column4: document.getElementById('33').value,
        column5: document.getElementById('44').value,
        column6: document.getElementById('55').value,
        column7: document.getElementById('66').value,
        column8: document.getElementById('77').value,
        column9: document.getElementById('88').value,
      }
      localStorage.form = JSON.stringify(form)
      // localStorage.setItem("form", JSON.stringify(form))


    }
    //  run when pages loads 
    function whenStart() {
      if (localStorage.form) {
        var savedForm = JSON.parse(localStorage.form)
        document.getElementById('00').value = savedForm.column1
        document.getElementById('11').value = savedForm.column2
        document.getElementById('22').value = savedForm.column3
        document.getElementById('33').value = savedForm.column4
        document.getElementById('44').value = savedForm.column5
        document.getElementById('55').value = savedForm.column6
        document.getElementById('66').value = savedForm.column7
        document.getElementById('77').value = savedForm.column8
        document.getElementById('88').value = savedForm.column9

      }
    }
    whenStart()
