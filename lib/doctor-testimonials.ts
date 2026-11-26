export interface DoctorTestimonial {
  quote: string;
  doctor: string;
  role?: string;
  hospital?: string;
}

export const DOCTOR_TESTIMONIALS: DoctorTestimonial[] = [
  {
    quote:
      "For my neurosurgical patients who need nutritional support, SUBSET and ADA-glu are options I am comfortable recommending, according to their medical condition. I find both simple to incorporate into the care plans of my patients.",
    doctor: "Dr. Ghulam Muhammad",
    role: "Neuro Surgeon",
  },
  {
    quote:
      "Adequate protein is a necessary part of a regular diet, and I advise PROTEIOS as a precautionary measure. It is a convenient way for my gynecology patients to fulfil their daily protein needs.",
    doctor: "Dr. Saima Ghayasuddin",
    role: "Consultant, Obstetrics and Gynaecologist",
    hospital: "Aga Khan University Hospital, Saifee Hospital",
  },
  {
    quote:
      "Patients with diabetes need nutrition that meets their daily requirements without placing extra strain on their sugar control. I rely on diabetes-specific nutrition such as ADA-glu to support that need, alongside each patient's diet and treatment plan.",
    doctor: "Dr. Muhammad Hanif Mati",
    role: "Consultant Diabetologist",
  },
  {
    quote:
      "When my patients with diabetes need dependable nutritional support, ADA-glu is an option I am comfortable suggesting. It fits easily into their daily routine, and they accept it well.",
    doctor: "Dr. Muhammad Umair",
    role: "Consultant Diabetologist",
  },
  {
    quote:
      "I use NUTRIPAK ADA-glu as a nutritional support option for patients with diabetes or impaired glucose tolerance who require better-balanced nutritional intake, particularly when dietary requirements need additional attention.\n\nPROTEIOS can be considered for patients with increased protein requirements, inadequate dietary protein intake, nutritional deficiencies, or those needing nutritional support during recovery.\n\nI believe targeted nutritional supplementation, alongside appropriate dietary counselling and medical management, can play a valuable role in supporting patients’ overall health and nutritional wellbeing.",
    doctor: "Dr Hina Ramzan Rajani",
    role: "Consultant Obstetrician and Gynaecologist",
  },
  {
    quote:
      "When patients need that extra nutritional boost, SUBSET is my preferred recommendation. It’s easy to prescribe, convenient for patients, and readily accepted. A practical solution to complement daily meals and support nutritional well-being.",
    doctor: "Dr Naresh Golani",
  },
];
