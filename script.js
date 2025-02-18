let lastClickTime = 0; // Store the time of the last click
// Sample data structure for hospitals by state
const hospitalsData =  {  
hyderabad: [
{ name: "Osmania General Hospital", location: "Afjalgunj, Hyderabad", website: "http://osmaniahospital.com" },
{ name: "Gandhi Hospital", location: "Secunderabad, Hyderabad", website: "http://gandhihospital.com" },
{ name: "District Hospital - Koti", location: "Koti, Hyderabad", website: "http://districthospitalkoti.com" },
{ name: "Kamineni Hospital", location: "LB Nagar, Hyderabad", website: "http://kamineni.com"},
{ name: "Yashoda Hospitals", location: "Somajiguda, Hyderabad", website: "http://yashodahospitals.com"},
{ name: "Care Hospitals", location: "Banjara Hills, Hyderabad", website: "http://carehospitals.com"},
{ name: "Medicover Hospitals", location: "Hi-Tech City, Hyderabad", website: "http://medicoverhospitals.com"},
{ name: "MNJ Cancer Hospital", location: "RedHills, Hyderabad", website: "http://mnjcancerhospital.com"},
{ name: "Mahavir Hospital", location: "Hyderabad", website: "http://mahavirhospital.com"},
{ name: "Shresta Orange Hospital", location: "LB Nagar, Hyderabad", website: "http://shrestaorangehospital.com"},
{ name: "Titan Bricilicone Hospital", location: "Hayathnagar, Hyderabad", website: "http://titanhospital.com"},
{ name: "Sai Sanjeevini Hospital", location: "Kothapet, Hyderabad", website: "http://saisanjeevini.com"},
{ name: "Praja Sai Hospital", location: "RTC Cross Roads, Hyderabad", website: "http://prajasaihospital.com"},
{ name: "Durghabhai Deshmukh", location: "Vidhya Nagar, Hyderabad", website: "http://deshmukhospital.com"},
{ name: "Supraja Hospital", location: "Nagole, Hyderabad", website: "http://suprajahospital.com"},
{ name: "Good Life Hospital", location: "Chaitanyapuri, Hyderabad", website: "http://goodlifehospital.com"},
{ name: "ICON Hospital", location: "Kothapet, Hyderabad", website: "http://iconhospital.com"},
{ name: "Indus Hospital", location: "Dilsukhnagar, Hyderabad", website: "http://indushospital.com"},
{ name: "Sigma Hospital", location: "Dilsukhnagar, Hyderabad", website: "http://sigmahospital.com"},
{ name: "Nikhil Hospital", location: "Dilsukhnagar, Hyderabad", website: "http://nikhilhospital.com"},
{ name: "Vasavi Hospital", location: "Lakdikapool, Hyderabad", website: "http://vasavihospital.com"},
{ name: "Kamineni Hospital", location: "Koti, Hyderabad", website: "http://kamineni.com"},
{ name: "Raksha Hospital", location: "L.B Nagar, Hyderabad", website: "http://rakshahospital.com"},
{ name: "Max Cure Hospitals", location: "TankBund, Hyderabad", website: "http://maxcurehospitals.com"},
{ name: "Sunshine Hospitals", location: "Paradise, Secunderabad", website: "http://sunshinehospitals.com"},
{ name: "Apollo Hospitals", location: "Secunderabad", website: "http://apollohospitals.com"},
{ name: "Yashoda Hospitals", location: "Secunderabad", website: "http://yashodahospitals.com"},
{ name: "Soumya Hospital", location: "Ramnagar, Hyderabad", website: "http://soumyahospital.com"},
{ name: "Krishna Institute Of Medical Sciences", location: "R.P Road, Secunderabad", website: "http://kims.com"},
{ name: "NIMS Hospital", location: "Panjagutta, Hyderabad", website: "http://nims.com"},
{ name: "Prime Hospital", location: "Hyderabad", website: "http://primehospital.com"},
{ name: "Mahesh Hospital", location: "Himayath Nagar, Hyderabad", website: "http://maheshhospital.com"},
{ name: "Paramitha Children Hospital", location: "Chaitanyapuri, Hyderabad", website: "http://paramithahospital.com"},
{ name: "Nilofer Hospital", location: "RedHills, Hyderabad", website: "http://niloferhospital.com"},
{ name: "Global Hospital", location: "Lakdikapool, Hyderabad", website: "http://globalhospital.com"},
{ name: "Care Hospital", location: "Banjara Hills, Hyderabad", website: "http://carehospitals.com"},
{ name: "Area Hospital", location: "Nampally, Hyderabad", website: "" },
{ name: "Area Hospital", location: "Golconda, Hyderabad", website: "" },
{ name: "Area Hospital", location: "Vanasthalipuram, Hyderabad", website: "" },
{ name: "Gurunanak Care Hospitals", location: "Musheerabad, Hyderabad", website: "" },
{ name: "Jagadamba Hospitals", location: "Hyderabad", website: "" },
{ name: "Krishna Childrens Hospitals", location: "Hyderabad", website: "" },
{ name: "L.K.Hospitals (P) Ltd.", location: "Malkajgiri, Hyderabad", website: "" },
{ name: "Sai Krishna Super Specialty Neuro And Poly Trauma Hospital", location: "Hyderabad", website: "" },
{ name: "Satya Kidney Centre And Super Speciality Hospital", location: "Hyderabad", website: "" },
{ name: "Sigma Hospitals", location: "Jeedimetla, Hyderabad", website: "" },
{ name: "Sri Raghavendra Hospital", location: "Hyderabad", website: "" },
{ name: "Sridhar Multi Speciality Hospital", location: "Hyderabad", website: "" },
{ name: "Nightingale Hospital", location: "Hyderabad", website: "" },
{ name: "Vasavi Hospital", location: "Lakdikapool, Hyderabad", website: "" },
{ name: "Azam Hospital", location: "Hyderabad", website: "" },
{ name: "STAR Children Hospital", location: "Banjara Hills, Hyderabad", website: "http://starchildrenhospital.com"},
{ name: "Innova Children Hospital", location: "Tarnaka, Hyderabad", website: "https://www.innovahospital.com" },
{ name: "Omsai Multi Specialty Hospital", location: "Balapur, Hyderabad", website: "" },
{ name: "ADITYA HOSPITAL", location: "ABIDS, Hyderabad", website: "https://www.adityahospitals.com" },
{ name: "GOVT ENT Hospital", location: "Koti, Hyderabad", website: "" },
{ name: "Government Ayurvedic Hospitals", location: "Hyderabad", website: "" },
{ name: "BBR Multi Specialty Hospital", location: "Malakpet, Hyderabad", website: "https://www.bbrhospitals.com" },
{ name: "Apollo Hospitals", location: "Jubilee Hills, Hyderabad", website: "https://www.apollohospitals.com" },
{ name: "Sathya Kidney Center", location: "Hyderabad", website: "" },
{ name: "GOVT Maternity Hospital", location: "Koti, Hyderabad", website: "" },
{ name: "Sri Sai Kidney Center", location: "Hyderabad", website: "" },
{ name: "Mahesh Hospital and Research Foundation", location: "Hyderabad", website: "" },
{ name: "S R R I T C D GOVT FEVER HOSPITAL", location: "Hyderabad", website: "" },
{ name: "Sarojini Devi Eye Hospital", location: "Hyderabad", website: "" },
{ name: "Apollo Cancer Hospital", location: "Hyderabad", website: "https://www.apollocancerinstitutes.com" },
{ name: "S V Pooja Hospital", location: "Hyderabad", website: "" },
{ name: "Madhava Nursing Home", location: "Secunderabad", website: "" },
{ name: "Ram Hospital", location: "Shapurnagar, Hyderabad", website: "" },
{ name: "Kims Mallareddy Super Speciality Hospital", location: "Jeedimetla, Hyderabad", website: "https://www.kimshospitals.com" },
{ name: "Shalini Hospital", location: "Barkatpura, Hyderabad", website: "https://www.shalinihospital.com" },
{ name: "Smt.Bhagawan Devi Hospital", location: "Hyderabad", website: "" },
{ name: "Lakshmi Maternity And Nursing Home", location: "Hyderabad", website: "" },
{ name: "Sri Narmada Hospital", location: "Gandhinagar, Hyderabad", website: "" },
{ name: "Paramitha Children Hospital", location: "Hyderabad", website: "https://www.paramithahospitals.com" },
{ name: "Mythri Hospital", location: "Chanda Nagar, Hyderabad", website: "https://www.mythrihospital.net" },
{ name: "Aditya Hospital", location: "Hyderabad", website: "https://www.adityahospitals.com" },
{ name: "Unimed Healthcare Pvt. Ltd (Star Hospitals)", location: "Hyderabad", website: "https://www.starhospitals.in" },
{ name: "Sunita Childrens Hospital", location: "Hyderabad", website: "" },
{ name: "Mn Area Hospital (Apvvp)", location: "Hyderabad", website: "" },
{ name: "Area Hospital", location: "Kondapur, Hyderabad", website: "" },
{ name: "Owaisi Hospital And Research Center", location: "Hyderabad", website: "" },
{ name: "Hyderabad Kidney And Laparoscopic Center", location: "Hyderabad", website: "" },
{ name: "Yashoda Hospitals", location: "Somajiguda, Hyderabad", website: "https://www.yashodahospitals.com" },
{ name: "Nikhil Hospital", location: "Hyderabad", website: "" },
{ name: "Alpha Super Speciality Hospital", location: "Hyderabad", website: "" },
{ name: "Pargna Hospital", location: "Hyderabad", website: "" },
{ name: "Princess Esra Hospital (DCMS)", location: "Hyderabad", website: "" },
{ name: "District Hospital", location: "Kingkoti, Hyderabad", website: "" },
{ name: "Shadan Medical College", location: "Hyderabad", website: "" },
{ name: "Seha Hospital", location: "Hyderabad", website: "" },
{ name: "Surakshaka Multi Speciality Hospital", location: "Hyderabad", website: "" },
{ name: "Life Hospital", location: "Hyderabad", website: "" },
{ name: "Government Cancer Hospital", location: "Hyderabad", website: "" },
{ name: "Kamala Hospital", location: "Hyderabad", website: "" },
{ name: "Shree Hrishikeshaya Hospitals", location: "Hyderabad", website: "" },
{ name: "Kamineni-King Koti", location: "Hyderabad", website: "" },
{ name: "Crawford Memorial Hospital", location: "Hyderabad", website: "" },
{ name: "Govt. Genl. and Chest Hospital", location: "Erragadda, Hyderabad", website: "" },
{ name: "Mamatha Hospital", location: "Hyderabad", website: "" },
{ name: "Goodwill Kidney And Surgical Centre", location: "Hyderabad", website: "" },
{ name: "Himabindu Multi Speciality Hospital", location: "Hyderabad", website: "" },
{ name: "Sigma Hospitals", location: "Dilsuknagar, Hyderabad", website: "" },
{ name: "Sridhar Multispeciality Hospitals", location: "Hyderabad", website: "" },
{ name: "Govt General Hospital", location: "Hyderabad", website: "" },
{ name: "Healing Touch Hospital", location: "Hyderabad", website: "" },
{ name: "BBC Hospital", location: "Hyderabad", website: "" },
{ name: "Medicare Hospitals", location: "Hyderabad", website: "" },
{ name: "New Life Hospital", location: "Hyderabad", website: "" },
{ name: "Premier Hospital", location: "Hyderabad", website: "" },
{ name: "Prime Hospitals", location: "Hyderabad", website: "" },
{ name: "Rainbow Children's Hospital", location: "Vikrampuri, Hyderabad", website: "" },
{ name: "Global Hospital", location: "Banjara Hills, Hyderabad", website: "" },
{ name: "Sai Bhavani Super Speciality Hospital", location: "Hyderabad", website: "" },
{ name: "Balaji Hospital", location: "Hyderabad", website: "" },
{ name: "The Sec Durga Bhai Deshmukh Hospital", location: "Hyderabad", website: "" },
{ name: "Apollo Hospitals Enterprises Ltd", location: "Jubilee Hills, Hyderabad", website: "" },
{ name: "Woodlands Hospital", location: "Hyderabad", website: "" },
{ name: "Usha Mohan Hospitals", location: "Hyderabad", website: "" },
{ name: "Maa Hospitals Pvt. Ltd.", location: "Hyderabad", website: "" },
{ name: "S.V.R. Super Speciality Hospital", location: "Hyderabad", website: "" },
{ name: "Sai Vani Hospitals Ltd", location: "Hyderabad", website: "" },
{ name: "Apollo Hospitals Enterprises Ltd", location: "Vikrampuri, Hyderabad", website: "" },
{ name: "Shravana Hospitals", location: "Hyderabad", website: "" },
{ name: "Kamineni Hospitals Pvt Ltd", location: "Hyderabad", website: "" },
{ name: "Image Hospitals", location: "Madhapur, Hyderabad", website: "" },
{ name: "Share Medical Care", location: "Medchal, Hyderabad", website: "" },
{ name: "Sri Sai Srinivasa Speciality Hospital", location: "Hyderabad", website: "" },
{ name: "Sigma Hospitals", location: "Secunderabad, Hyderabad", website: "" },
{ name: "Soumya Multispeciality Hospital", location: "Hyderabad", website: "" },
{ name: "Krishna Institute Of Medical Sciences Ltd.", location: "Hyderabad", website: "" },
{ name: "Yashoda Hospital", location: "Malakpet, Hyderabad", website: "" },
{ name: "Kamineni Hospitals", location: "Hyderabad", website: "" },
{ name: "Mediciti Hospitals", location: "Hyderabad", website: "" },
{ name: "Mahavir Hospital and Research Centre", location: "Hyderabad", website: "" },
{ name: "Rainbow Children's Hospital and Perinatal Centre", location: "Banjara Hills, Hyderabad", website: "" },
{ name: "Lotus Children's Hospital", location: "Hyderabad", website: "" },
{ name: "M.N.J. Hospitals", location: "Hyderabad", website: "" },
{ name: "Apollo Hospitals Enterprise Ltd", location: "DRDO, Hyderabad", website: "" },
{ name: "Osmania General Hospital", location: "Hyderabad", website: "" },
{ name: "Niloufer Hospital", location: "Hyderabad", website: "" },
{ name: "Global Hospital", location: "Lakdikapool, Hyderabad", website: "" },
{ name: "Gandhi Hospitals", location: "Hyderabad", website: "" },
{ name: "Indo-American Cancer Institute and Research Centre", location: "Hyderabad", website: "" },
{ name: "Kamineni Wockhardt Hospitals", location: "Kingkoti, Hyderabad", website: "" },
{ name: "Wockhardt Heart Center", location: "L.B. Nagar, Hyderabad", website: "" },
{ name: "Image Hospital", location: "Ameerpet, Hyderabad", website: "" },
{ name: "Medwin Hospitals", location: "Hyderabad", website: "" },
{ name: "Quality Care India Ltd (Care Hospitals)", location: "Banjara Hills, Hyderabad", website: "" },
{ name: "Life Hospital", location: "Hyderabad", website: "" },
{ name: "Care Hospitals", location: "Musheerabad, Hyderabad", website: "" },
{ name: "Care Hospitals", location: "Secunderabad, Hyderabad", website: "" },
{ name: "Quality Care India Ltd (Care Hospitals)", location: "Nampally, Hyderabad", website: "" },
{ name: "Innova Children's Heart Hospital Pvt. Ltd.", location: "Hyderabad", website: "" },
{ name: "Asian Institute of Gastroenterology", location: "Hyderabad", website: "" },
{ name: "Remedy Hospitals", location: "Hyderabad", website: "" },
{ name: "Superintendent - Govt. Maternity Hospital", location: "Nayapul, Hyderabad", website: "" },
{ name: "Vijaya Health Care", location: "Hyderabad", website: "" },
{ name: "Adithya Hospital", location: "Abids, Hyderabad", website: "" },
{ name: "NIMS Hospitals", location: "Hyderabad", website: "" },
{ name: "Bibi Cancer and General Hospital", location: "Hyderabad", website: "" },
{ name: "Poulomi Hospital", location: "Hyderabad", website: "" },
{ name: "Govt Maternity Hospital", location: "Koti, Hyderabad", website: "" },
{ name: "Sri Sai Kamala Hospital", location: "Hyderabad", website: "" },
{ name: "Sai Krishna Neuro Hospitals", location: "Hyderabad", website: "" },
],
warangal:[
{ name: "Aarogyamatha Udumala Hospital", location: "Warangal", website: "http://aarogyamathaudumalahospital.com" },
{ name: "Sri Sharanya Nursing Home and Critical Care", location: "Warangal", website: "http://srisharanyanursinghome.com" },
{ name: "Sai Care Hospital", location: "Warangal", website: "http://saicarehospital.com" },
{ name: "Adithya Hospital", location: "Warangal", website: "http://adithyahospitalwarangal.com" },
{ name: "Amrutha Childrens Nursing Home", location: "Warangal", website: "http://amruthachildrensnursinghome.com" },
{ name: "Kalyani Hospital", location: "Warangal", website: "http://kalyanihospitalwarangal.com" },
{ name: "Laxmi Narasimha Hospital", location: "Warangal", website: "http://laxminarasimhahospital.com" },
{ name: "Govt Maternity Hospital", location: "Hanmakonda, Warangal", website: "http://govtmaternityhospitalhanmakonda.com" },
{ name: "Govt Maternity Hospital", location: "Warangal", website: "http://govtmaternityhospitalwarangal.com" },
{ name: "Area Hospital", location: "Jangoan, Warangal", website: "http://areahospitaljangoan.com" },
{ name: "Area Hospital", location: "Mahaboobabad, Warangal", website: "http://areahospitalmahaboobabad.com" },
{ name: "Life Line Hospital", location: "Warangal", website: "http://lifelinehospitalwarangal.com" },
{ name: "Mahatma Gandhi Memorial Hospital", location: "Warangal", website: "http://mgmhospitalwarangal.com" },
{ name: "Rohini Medicare Pvt. Ltd.", location: "Warangal", website: "http://rohinimedicare.com" },
{ name: "Satya Hospital", location: "Warangal", website: "http://satyahospitalwarangal.com" },
{ name: "Sri Srinivasa Kidney And Maternity Center", location: "Warangal", website: "http://srisrinivasahospital.com" },
{ name: "Warangal Kidney Center And Childrens Hospital", location: "Warangal", website: "http://warangalkidneycenter.com" },
{ name: "Government Maternity Hospital", location: "Warangal", website: "http://governmentmaternityhospitalwarangal.com" },
{ name: "Warangal Hospital Diagnostic and Research Center Pvt. Ltd.", location: "Warangal", website: "http://warangaldiagnosticcenter.com" },
{ name: "St. Ann's Hospital", location: "Warangal", website: "http://stannshospitalwarangal.com" },
{ name: "Jaya Hospital", location: "Warangal", website: "http://jayahospitalwarangal.com" },
],
adilabad: [
{ name: "Area Hospital - Mancherial", location: "Mancherial, Adilabad", website: "http://mancherialhospital.com"},
{ name: "RIMS Hospital", location: "Adilabad", website: "http://rimshospital.com" },
{ name: "Govt. Hospital - Adilabad", location: "Adilabad", website: "http://govthospitaladilabad.com" },
{ name: "Shubham Hospital", location: "Adilabad", website: "http://shubhamhospital.com"},
],
karimnagar: [
{ name: "Apollo Reach Hospital", location: "Karimnagar", website: "http://apollohospitalkarimnagar.com" },
{ name: "Area Hospital", location: "Siddipet, Karimnagar", website: "http://areahospitalsiddipet.com" },
{ name: "Area Hospital", location: "Jagityal, Karimnagar", website: "http://areahospitaljagityal.com" },
{ name: "Siva Rama Hospital", location: "Karimnagar", website: "http://sivaramahospital.com" },
{ name: "Sri Rama Multi Speciality Hospital", location: "Karimnagar", website: "http://sriramahospital.com" },
{ name: "Dr. Laxman Institute Of Orthopedics", location: "Karimnagar", website: "http://drlaxmanorthopedics.com" },
{ name: "Sai Ram Multi Specialty Hospital", location: "Karimnagar", website: "http://sairamhospitalkarimnagar.com" },
{ name: "Area Hospital", location: "Karimnagar", website: "http://areahospitalkarimnagar.com" },
{ name: "Sushrutha Cancer Hospital", location: "Karimnagar", website: "http://sushruthacancerhospital.com" },
{ name: "District Hospital", location: "Karimnagar", website: "http://districthospitalkarimnagar.com" },
{ name: "Sarojini Hospital", location: "Karimnagar", website: "http://sarojinihospital.com" },
{ name: "District Head Quarters", location: "Karimnagar", website: "http://districtheadquarterskarimnagar.com" },
{ name: "Government Hospital", location: "Karimnagar", website: "http://governmenthospitalkarimnagar.com" },
{ name: "Venkateshwara Kidney Center", location: "Karimnagar", website: "http://venkateshwarakidneycenter.com" },
{ name: "Surya Nursing Home", location: "Karimnagar", website: "http://suryanursinghome.com" },
{ name: "Surya Hospital", location: "Karimnagar", website: "http://suryahospitalkarimnagar.com" },
{ name: "Sai Praja Hospital Pvt. Ltd.", location: "Karimnagar", website: "http://saiprajahospital.com" },
{ name: "Prathima Institute of Medical Science", location: "Karimnagar", website: "http://prathimamedicalscience.com" },
{ name: "Renee Hospital", location: "Karimnagar", website: "http://reneehospital.com" },
{ name: "Venkateshwar Kidney Center", location: "Karimnagar", website: "http://venkateshwarkidneycenter.com" },
{ name: "Medwin General Hospital", location: "Karimnagar", website: "http://medwingeneralhospital.com" },
{ name: "Surya Hospitals", location: "Karimnagar", website: "http://suryahospitalskarimnagar.com" },
{ name: "Amrutha Nursing Home", location: "Karimnagar", website: "http://amruthanursinghome.com" },
{ name: "Dr. Kota Reddy Hospital", location: "Karimnagar", website: "http://drkotareddyhospital.com" },
{ name: "Chalmeda Anand Rao Institute Of Medical Sciences (CAIMS)", location: "Karimnagar", website: "http://caimskarimnagar.com" },
{ name: "Dr. Bhoom Reddy's Hospital", location: "Karimnagar", website: "http://drbhoomreddyhospital.com" },
],
khammam: [
{ name: "Cure Emergency Hospital", location: "Khammam", website: "http://cureemergencykhammam.com" },
{ name: "Mamatha General And Super Speciality Hospital", location: "Khammam", website: "http://mamathahospitalkhammam.com" },
{ name: "Area Hospital", location: "Kothagudem, Khammam", website: "http://areahospitalkothagudem.com" },
{ name: "Area Hospital", location: "Badrachalam, Khammam", website: "http://areahospitalbadrachalam.com" },
{ name: "Sri Ram Kidney Infertility and Laparoscopic Centre", location: "Khammam", website: "http://sriramkidneycenter.com" },
{ name: "District Hospital", location: "Khammam", website: "http://districthospitalkhammam.com" },
{ name: "New Life Emergency And Multi Speciality Hospital", location: "Khammam", website: "http://newlifehospitalkhammam.com" },
{ name: "Shyamala Hospital", location: "Khammam", website: "http://shyamalakhammam.com" },
{ name: "Srujan Ortho And Accident Care Hospital", location: "Khammam", website: "http://srujanortho.com" },
{ name: "Hope Super Speciality Hospital", location: "Khammam", website: "http://hopespecialitykhammam.com" },
],
mahbubnagar: [
{ name: "Shadnagar-Chc", location: "Mahbubnagar", website: "http://shadnagarchc.com" },
{ name: "Area Hospital", location: "Gadwal, Mahbubnagar", website: "http://areahospitalgadwal.com" },
{ name: "District Hospital", location: "Mahbubnagar", website: "http://districthospitalmahbubnagar.com" },
{ name: "Area Hospital", location: "Wanaparthy, Mahbubnagar", website: "http://areahospitalwanaparthy.com" },
{ name: "Area Hospital", location: "Narayanpet, Mahbubnagar", website: "http://areahospitalnarayanpet.com" },
{ name: "S.V.S Hospital", location: "Mahbubnagar", website: "http://svshospitalmahbubnagar.com" },
{ name: "Govt General Hospital", location: "Mahbubnagar", website: "http://govtgeneralmahbubnagar.com" },
],
medak: [
{ name: "Area Hospital - Medak", location: "Medak", website: "http://medakhospital.com"},
{ name: "Govt General Hospital", location: "Sangareddy, Medak", website: "http://sangareddyhospital.com" },
{ name: "Sree Dhanvanthri Hospital", location: "Medak", website: "http://dhanvanthrihospital.com" },
],
secunderabad: [
{ name: "Yashoda Hospitals", location: "Secunderabad", website: "http://yashodahospitals.com" },
{ name: "Pushpagiri Eye Hospital", location: "Secunderabad", website: "http://pushpagirieye.com"},
{ name: "Global Hospitals", location: "Secunderabad", website: "http://globalhospitals.com" },
{ name: "Care Hospitals", location: "Secunderabad", website: "http://carehospitals.com" },
],
nalgonda: [
{ name: "Area Hospital - Narketpalli", location: "Nalgonda", website: "http://narketpallihospital.com", googleMaps: "https://goo.gl/maps/xyz" },
{ name: "Vijayalaxmi Multispeciality Hospital", location: "Suryapet, Nalgonda", website: "http://vijayalaxmihospital.com", googleMaps: "https://goo.gl/maps/abc123" },
{ name: "Nalgonda District Hospital", location: "Nalgonda", website: "http://nalgondahospital.com", googleMaps: "https://goo.gl/maps/abc789" },
{ name: "Sri Swathi Hospital", location: "Nalgonda", website: "http://sriwathihospital.com", googleMaps: "https://goo.gl/maps/xyz456" },
],
nizamabad: [
{ name: "Area Hospital - Kamareddy", location: "Kamareddy, Nizamabad", website: "http://kamareddyhospital.com" },
{ name: "Sushruta Cancer Hospital", location: "Nizamabad", website: "http://sushrutahospitals.com"},
{ name: "Nizamabad District Hospital", location: "Nizamabad", website: "http://nizamabadhospital.com"},
{ name: "Sri Sai Hospital", location: "Nizamabad", website: "http://sriSaihospital.com" },
],
};

const districtSelect = document.getElementById("district-select");
const hospitalList = document.getElementById("hospital-list");
let currentPage = 1;
const itemsPerPage = 12;

districtSelect.addEventListener("change", function () {
    currentPage = 1;
    showHospitals(this.value, currentPage);
});

function showHospitals(district, page) {
    hospitalList.innerHTML = "";
    if (hospitalsData[district]) {
        const startIndex = (page - 1) * itemsPerPage;
        const paginatedHospitals = hospitalsData[district].slice(startIndex, startIndex + itemsPerPage);
        paginatedHospitals.forEach(hospital => {
            const hospitalDiv = document.createElement("div");
            hospitalDiv.className = "hospital-card";
            hospitalDiv.innerHTML = `
                <h3>🏥 ${hospital.name}</h3>
                <p>📍 Location:  ${hospital.location}</p>
                <a  🌐 href="${hospital.website}" target="_blank">Official Website</a>
            `;
            hospitalList.appendChild(hospitalDiv);
        });

        renderPagination(district, page);
    } else {
        hospitalList.innerHTML = "<p>No hospitals found for this district.</p>";
    }
}

function renderPagination(district, page) {
    const paginationDiv = document.createElement("div");
    paginationDiv.className = "pagination";
    const totalPages = Math.ceil(hospitalsData[district].length / itemsPerPage);
    paginationDiv.innerHTML = "";

    const prevButton = document.createElement("button");
    prevButton.textContent = "<";
    prevButton.disabled = page === 1;
    prevButton.style.width='50px';
    prevButton.style.height='30px';
    prevButton.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            showHospitals(district, currentPage);
        }
    };
    paginationDiv.appendChild(prevButton);

    const nextButton = document.createElement("button");
    nextButton.textContent = ">";
    nextButton.disabled = page === totalPages;
    nextButton.style.width='50px';
    nextButton.style.height='30px';
    nextButton.onclick = () => {
        if (currentPage < totalPages) {
            currentPage++;
            showHospitals(district, currentPage);
        }
    };
    paginationDiv.appendChild(nextButton);

    hospitalList.appendChild(paginationDiv);
}
document.getElementById('language-selector').addEventListener('change', function () {
    const selectedLang = this.value;

    // Update all text elements dynamically
    document.getElementById('title').innerText = translations[selectedLang].title;
    document.getElementById('description').innerText = translations[selectedLang].description;
    document.getElementById('jee-date').innerText = translations[selectedLang].jeeDate;
    document.getElementById('learn-more').innerText = translations[selectedLang].learnMore;

    // Save language preference in localStorage
    localStorage.setItem('selectedLanguage', selectedLang);
});

// Load saved language preference on page load
window.onload = function () {
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    document.getElementById('language-selector').value = savedLang;

    // Apply saved language
    document.getElementById('title').innerText = translations[savedLang].title;
    document.getElementById('description').innerText = translations[savedLang].description;
    document.getElementById('learn-more').innerText = translations[savedLang].learnMore;
};
