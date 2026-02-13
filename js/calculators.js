// Calculator functions for land value increment tax, deed tax, and mortgage
// Extracted from index.html for better maintainability

function taxing() {
    var nowvalue, lastvalue, expvalue, area, bb15_2, bb15_3;
    var nowtotal, oldtotal, addtotal, tax1, tax9, tax8, tax7, tax3;
    tax3 = parseFloat(document.landtax.sel.value) || 0;
    //window.alert(tax3);
    nowvalue = parseFloat(document.landtax.T1.value) || 0;
    lastvalue = parseFloat(document.landtax.T2.value) || 0;
    expvalue = parseFloat(document.landtax.T3.value) || 0;
    area = parseFloat(document.landtax.T4.value) || 0;
    bb15_2 = parseFloat(document.landtax.T5.value) || 0;
    bb15_3 = parseFloat(document.landtax.T6.value) || 0;
    oldtotal = lastvalue * area * (bb15_3 / bb15_2) * (expvalue / 100);
    nowtotal = nowvalue * area * (bb15_3 / bb15_2);
    addtotal = nowtotal - oldtotal;
    if (addtotal <= 0) {
        addtotal = 0;
        oldtotal = 0
    }
    ;
    tax1 = addtotal * 0.1;
    switch (tax3) {
        case 0 : {
            if (addtotal > 2 * oldtotal) {
                tax9 = addtotal * 0.4 - oldtotal * 0.3
            } else {
                if ((oldtotal <= addtotal) && (addtotal <= 2 * oldtotal)) {
                    tax9 = addtotal * 0.3 - oldtotal * 0.1
                } else {
                    tax9 = addtotal * 0.2
                }
            }

            document.landtax.T9.value = Math.round(tax9);

        }
            break;
        case 1 : {
            if (addtotal > 2 * oldtotal) {
                tax9 = addtotal * 0.36 - oldtotal * 0.24
            } else {
                if ((oldtotal <= addtotal) && (addtotal <= 2 * oldtotal)) {
                    tax9 = addtotal * 0.28 - oldtotal * 0.08
                } else {
                    tax9 = addtotal * 0.2
                }
            }
            document.landtax.T9.value = Math.round(tax9);

        }
            break;
        case 2 : {
            if (addtotal > 2 * oldtotal) {
                tax9 = addtotal * 0.34 - oldtotal * 0.21
            } else {
                if ((oldtotal <= addtotal) && (addtotal <= 2 * oldtotal)) {
                    tax9 = addtotal * 0.27 - oldtotal * 0.07
                } else {
                    tax9 = addtotal * 0.2
                }
            }
            document.landtax.T9.value = Math.round(tax9);

        }
            break;
        case 3 : {
            if (addtotal > 2 * oldtotal) {
                tax9 = addtotal * 0.32 - oldtotal * 0.18
            } else {
                if ((oldtotal <= addtotal) && (addtotal <= 2 * oldtotal)) {
                    tax9 = addtotal * 0.26 - oldtotal * 0.06
                } else {
                    tax9 = addtotal * 0.2
                }
            }
            document.landtax.T9.value = Math.round(tax9);

        }
            break;
    }
    document.landtax.T10.value = Math.round(tax1);
}

function clearing() {
    document.landtax.T1.value = "";
    document.landtax.T2.value = "";
    document.landtax.T3.value = "";
    document.landtax.T4.value = "";
    document.landtax.T5.value = "";
    document.landtax.T6.value = "";
    //document.landtax.T7.value="";
    //document.landtax.T8.value="";
    document.landtax.T9.value = "";
    document.landtax.T10.value = "";

}

var a1, a2, a3;

a1 = ("0");
a2 = ("0");
a3 = ("0");

function seta1(t1) {
    a1 = t1.value;
}

function seta2(t2) {
    a2 = t2.value;
}

function taxing2(form) {
    var xa1;
    xa1 = (a1 * (a2 / 100));
    form.fxa1.value = xa1;
}

function pv(rate, nper, pmt) {
    return -(pmt * (Math.pow(1 + rate, nper) - 1) / rate) / Math.pow(1 + rate, nper);
}

function GetECI(cap, yrate, eynper) {
    return (cap - pv(yrate / 12, eynper * 12, -(cap * (yrate / 12)))) * Math.pow(1 + yrate / 12, eynper * 12);
}

function GetLoan() {
    var i, j, k;
    var cap, ynper, eynper, yrate, ncap;
    with (document.loan) {
        cap = (i1.value - 0) * 10000;
        ynper = i2.value - 0;
        eynper = i3.value - 0;
        yrate = (i4.value - 0) / 100;
        r1.value = ((eynper == 0) ? "無寬限期" : Math.round(cap * (yrate / 12)));
        r2.value = Math.round(cap / pv(yrate / 12, (ynper - eynper) * 12, -1));

        r3.value = r1.value;

        r4.value = "";
        ncap = GetECI(cap, yrate, eynper);
        j = 0;
        for (i = 1; i < (ynper - eynper) * 12; i++) {
            if ((i - 1) % 12 == 0)
                r4.value += "第" + i + "個月(第" + ((i - 1) / 12 + 1) + "年)付: " + Math.round(cap / ((ynper - eynper) * 12) + (ncap * yrate / 12)) + "元.\n";
            ncap -= cap / ((ynper - eynper) * 12);
        }
        r4.value += "最後一個月付: " + Math.round(cap / ((ynper - eynper) * 12) + (ncap * yrate / 12)) + "元.\n";
    }
}
