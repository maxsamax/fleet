function co_r(a){"object"==typeof ChargeOver?a():setTimeout("co_r("+a+")",250)}function my_callback_function(a,b,c){200==a?(card=c.creditcard,selectingStates=!1,DSCreditCardsList.execute()):(Appery("BillingInfoPopupError").text("Error: "+b).show(),setTimeout(function(){Appery("BillingInfoPopupError").hide("close")},1e4))}var selectingStates=!1,acceptAgreements=!1,card=[],selectedValue=Apperyio("ExistingCardSelect").find("option:selected").val(),Billing=function(){var a=[],b=[],c=-1,d={},e="",f="",g="",h="",i="",j="",k="",l="",m="",n="",o="",p="",q="",r="",s="";return d.setProductsList=function(b){b&&(a=b)},d.productsList=function(){return a},d.setCreditCardsList=function(a){a&&(b=a)},d.creditCardsList=function(){return b},d.setNumberOfDevices=function(a){a&&(c=a)},d.numberOfDevices=function(){return c},d.setProduct=function(a){if(a&&!_.isEmpty(a)){var b={};localStorage.billingPackage&&(b=JSON.parse(localStorage.billingPackage)),b.product=a,localStorage.billingPackage=JSON.stringify(b)}},d.product=function(){if(!localStorage.billingPackage)return{};var a=JSON.parse(localStorage.billingPackage);return a&&a.product?a.product:{}},d.setDiscount=function(a){if(a&&!_.isEmpty(a)){var b={};localStorage.billingPackage&&(b=JSON.parse(localStorage.billingPackage)),b.discount=a,localStorage.billingPackage=JSON.stringify(b)}},d.discount=function(){if(!localStorage.billingPackage)return{};var a=JSON.parse(localStorage.billingPackage);return a&&a.discount?a.discount:{}},d.setCreditCard=function(a){if(a&&!_.isEmpty(a)){var b={};localStorage.billingPackage&&(b=JSON.parse(localStorage.billingPackage)),b.creditCard=a,localStorage.billingPackage=JSON.stringify(b)}},d.creditCard=function(){if(!localStorage.billingPackage)return{};var a=JSON.parse(localStorage.billingPackage);return a&&a.creditCard?a.creditCard:{}},d.setInvoicePayment=function(a){if(a&&!_.isEmpty(a)){var b={};localStorage.billingPackage&&(b=JSON.parse(localStorage.billingPackage)),b.invoicing=a,localStorage.billingPackage=JSON.stringify(b)}},d.invoicePayment=function(){if(!localStorage.billingPackage)return{};var a=JSON.parse(localStorage.billingPackage);return a&&a.invoicing?a.invoicing:{}},d.validation=function(){var a=!1;return selectedValue=Apperyio("ExistingCardSelect").find("option:selected").val(),e=Apperyio("BillingInfoFirstNameInput").val(),f=Apperyio("BillingInfoLastNameInput").val(),g=Apperyio("BillingInfoCardNumberInput1").val(),h=Apperyio("BillingInfoCardNumberInput2").val(),i=Apperyio("BillingInfoCardNumberInput3").val(),j=Apperyio("BillingInfoCardNumberInput4").val(),k=Apperyio("BillingInfoExpiryDate").val(),l=Appery("BillingInfoCVVInput").val(),m=Appery("BillingInfoAddress1Input").val(),n=Appery("BillingInfoCityInput").val(),o=Appery("BillingInfoCountryInput").val(),p=Appery("BillingInfoPostcodeInput").val(),q=Appery("BillingInfoStateSelect").find("option:selected").val(),r=Appery("BillingInfoPhoneInput").val(),e.length&&e.match(/[A-Za-z-.]+/)||(Appery("BillingInfoFirstNameError").show(),a=!0),f.length&&f.match(/[A-Za-z-.]+/)||(Appery("BillingInfoLastNameError").show(),a=!0),"-1"===selectedValue&&(g.length&&g.match(/^[0-9]+$/)||(Appery("BillingInfoCardNumberError").show(),a=!0),h.length&&h.match(/^[0-9]+$/)||(Appery("BillingInfoCardNumberError").show(),a=!0),i.length&&i.match(/^[0-9]+$/)||(Appery("BillingInfoCardNumberError").show(),a=!0),j.length&&j.match(/^[0-9]+$/)||(Appery("BillingInfoCardNumberError").show(),a=!0),k.length||(Appery("BillingInfoExpiryDateError").show(),a=!0),l.length&&l.match(/^[0-9]{3,4}$/)||(Appery("BillingInfoCVVError").show(),a=!0)),"-2"===selectedValue&&(r.length&&r.match(/^[0-9]+$/)||(Appery("BillingInfoPhoneError").show(),a=!0)),m.length||(Appery("BillingInfoAddressError").show(),a=!0),n.length||(Appery("BillingInfoCityError").show(),a=!0),o.length||(Appery("BillingInfoCountryError").show(),a=!0),p.length||(Appery("BillingInfoPostcodeError").show(),a=!0),q.length||(Appery("BillingInfoStateError").show(),a=!0),!a},d.addCreditCard=function(){if(Billing.validation()){co_r(function(){ChargeOver.Core.setup({instance:"whrzt.chargeover.com",token:"R0apsNl1MtEeIFx9b23qCV5YWgk6nwQH"})});var a={customer_id:"1",number:Appery("BillingInfoCardNumberInput1").val()+" "+Appery("BillingInfoCardNumberInput2").val()+" "+Appery("BillingInfoCardNumberInput3").val()+" "+Appery("BillingInfoCardNumberInput4").val(),expdate_month:parseInt($("#ui-datepicker-div .ui-datepicker-month :selected").val())+1,expdate_year:parseInt($("#ui-datepicker-div .ui-datepicker-year :selected").val()),name:Appery("BillingInfoFirstNameInput").val()+" "+Appery("BillingInfoLastNameInput").val(),cvv:Appery("BillingInfoCVVInput").val()||"",address:Appery("BillingInfoAddress1Input").val()||Appery("BillingInfoAddress2Input").val()||"",city:Appery("BillingInfoCityInput").val()||"",state:Appery("BillingInfoStateSelect").find("option:selected").val()||"",postcode:Appery("BillingInfoPostcodeInput").val()||"",country:Appery("BillingInfoCountryInput").val()||""};ChargeOver.CreditCard.tokenize(a,my_callback_function)}},d.invoicing=function(){Billing.validation()&&Appery.navigateTo("ConfirmPurchasePage")},d.clearForm=function(){Appery("BillingInfoFirstNameInput").val(""),Appery("BillingInfoLastNameInput").val(""),Appery("BillingInfoCardNumberInput1").val(""),Appery("BillingInfoCardNumberInput2").val(""),Appery("BillingInfoCardNumberInput3").val(""),Appery("BillingInfoCardNumberInput4").val(""),Appery("BillingInfoExpiryDate").val(""),Appery("BillingInfoCVVInput").val(""),Appery("BillingInfoCompanyInput").val(""),Appery("BillingInfoAddress1Input").val(""),Appery("BillingInfoAddress2Input").val(""),Appery("BillingInfoCityInput").val(""),Appery("BillingInfoCountryInput").val("USA"),Appery("BillingInfoPostcodeInput").val(""),Appery("BillingInfoStateSelect").find('option[value=""]').prop("selected","selected"),Appery("BillingInfoStateSelect").refresh(),Appery("BillingInfoPhoneInput").val("")},d.hideErrors=function(){Appery("BillingInfoFirstNameError").hide(),Appery("BillingInfoLastNameError").hide(),Appery("BillingInfoCardNumberError").hide(),Appery("BillingInfoExpiryDateError").hide(),Appery("BillingInfoCVVError").hide(),Appery("BillingInfoAddressError").hide(),Appery("BillingInfoCityError").hide(),Appery("BillingInfoCountryError").hide(),Appery("BillingInfoPostcodeError").hide(),Appery("BillingInfoStateError").hide(),Appery("BillingInfoPhoneError").hide()},d.confirmation=function(){var a=["January","February","March","April","May","June","July","August","September","October","November","December"],b=Billing.discount().price?Billing.discount().price:"0",c=Billing.discount().price?Billing.product().price-Billing.discount().price:Billing.product().price,d=5,e=parseInt(c)+d;Appery("productNameConfirm").text(Billing.product().name),Appery("productDescriptionConfirm").text(Billing.product().description),Appery("numberOfDevicesConfirm").text(Billing.numberOfDevices()),Billing.product().perTrailerPrice&&Appery("pricePerUnitConfirm").text("$"+Billing.product().perTrailerPrice),Appery("productPriceConfirm").text("$"+Billing.product().price),Billing.discount().discountId&&(Appery("discountCodeConfirm").text(Billing.discount().discountCode),Appery("discountDescriptionConfirm").text(Billing.discount().discount),Appery("discountPriceConfirm").text("0"===Billing.discount().price?"$"+Billing.discount().price:"-$"+Billing.discount().price),Appery("discountTable").show()),Appery("subtotalConfirm").text("$"+c),Appery("taxConfirm").text("$"+d),Appery("totalConfirm").text("$"+e),Appery("disclaimerConfirm").text("Congratulations - you saved $"+b+" in this billing cycle!"),Appery("ConfirmEmail").text(localStorage.email||sessionStorage.email),selectedValue>0?(Appery("ConfirmCardNumber").text(Billing.creditCard().mask_number),Appery("ConfirmCardType").text(Billing.creditCard().type_name),Appery("ConfirmExpiryDate").text(a[Billing.creditCard().expdate_month]+" "+Billing.creditCard().expdate_year),Appery("ConfirmName").text(Billing.creditCard().name),$(".ConfirmPurchasePage_mobilegrid_375_row_1").css("display","table-row"),$(".ConfirmPurchasePage_mobilegrid_375_row_2").css("display","table-row"),$(".ConfirmPurchasePage_mobilegrid_375_row_3").css("display","table-row"),$(".ConfirmPurchasePage_mobilegrid_375_row_5").css("display","none"),$(".ConfirmPurchasePage_mobilegrid_375_row_6").css("display","none")):($(".ConfirmPurchasePage_mobilegrid_375_row_1").css("display","none"),$(".ConfirmPurchasePage_mobilegrid_375_row_2").css("display","none"),$(".ConfirmPurchasePage_mobilegrid_375_row_3").css("display","none"),$(".ConfirmPurchasePage_mobilegrid_375_row_5").css("display","table-row"),$(".ConfirmPurchasePage_mobilegrid_375_row_6").css("display","table-row"),Appery("ConfirmName").text(Billing.invoicePayment().firstName+" "+Billing.invoicePayment().lastName),Appery("ConfirmAddress").text(Billing.invoicePayment().address1+", "+Billing.invoicePayment().city+", "+Billing.invoicePayment().state+" "+Billing.invoicePayment().postcode+", "+Billing.invoicePayment().country),Appery("ConfirmPhone").text(Billing.invoicePayment().phone))},d.passwordConfirmation=function(){var a=!1;return s=Appery("passwordConfirm").val(),s.length?void(a?Appery("passwordConfirmError").show():Appery.navigateTo("ActivationPage")):(Appery("passwordConfirmError").show(),void(a=!0))},d}();