'use client'

import { useLanguage } from '@/contexts/LanguageContext'

const palette = ['bg-emerald-600', 'bg-blue-600', 'bg-rose-600', 'bg-indigo-600', 'bg-cyan-700', 'bg-purple-600', 'bg-amber-600', 'bg-teal-700']
const colorFor = (tech: string) => palette[tech.split('').reduce((a, c) => a + c.charCodeAt(0), 0) % palette.length]

const projects = [
  {
    number: '01',
    title: { id: "Pelayanan Kefarmasian & SIMRS", en: "Pharmaceutical Services & SIMRS" },
    description: { id: "Pelayanan kefarmasian di rawat jalan, rawat inap, dan IGD, dengan pencatatan resep dan dispensing melalui SIMRS.", en: "Pharmaceutical services in outpatient, inpatient, and emergency units, with prescription recording and dispensing through SIMRS." },
    framework: "RSUD M. NATSIR SOLOK",
    techStack: ["Farmasi Klinis", "SIMRS"],
  },
  {
    number: '02',
    title: { id: "Pengkajian Resep, Rekonsiliasi Obat, PTO & MESO", en: "Prescription Review, Medication Reconciliation, TDM & ADR Monitoring" },
    description: { id: "Pengkajian resep (administratif, farmasetik, klinis), rekonsiliasi obat, penelusuran riwayat penggunaan obat, PTO, PIO, KIE, dan MESO.", en: "Prescription review (administrative, pharmaceutical, clinical), medication reconciliation, medication history, TDM, DIS, patient education, and ADR monitoring." },
    framework: "RSUD M. NATSIR SOLOK",
    techStack: ["Farmasi Klinis", "PTO", "MESO"],
  },
  {
    number: '03',
    title: { id: "Evaluasi Peralihan Antibiotik IV ke Oral", en: "Evaluation of IV-to-Oral Antibiotic Switch" },
    description: { id: "Mempelajari evaluasi peralihan terapi antibiotik intravena ke oral (IV-to-oral switch).", en: "Studied the evaluation of switching antibiotic therapy from intravenous to oral (IV-to-oral switch)." },
    framework: "RSUD M. NATSIR SOLOK",
    techStack: ["Farmasi Klinis", "Antibiotik"],
  },
  {
    number: '04',
    title: { id: "Sediaan Steril, Peracikan & Perbekalan Farmasi", en: "Sterile Preparation, Compounding & Pharmaceutical Supplies" },
    description: { id: "Penyiapan sediaan steril, peracikan, serta penyimpanan, penataan, restocking, dan pengendalian persediaan obat dan BMHP.", en: "Sterile preparation, compounding, and storage, arrangement, restocking, and inventory control of drugs and medical consumables." },
    framework: "RSUD M. NATSIR SOLOK",
    techStack: ["Sediaan Steril", "Perbekalan"],
  },
  {
    number: '05',
    title: { id: "Research & Development dan Quality by Design", en: "Research & Development and Quality by Design" },
    description: { id: "Perancangan formula, pemilihan API dan eksipien, serta penyusunan QTPP, identifikasi CQA dan CMA.", en: "Formula design, selection of APIs and excipients, and preparation of QTPP and identification of CQA and CMA." },
    framework: "PT MUTIARA MUKTI FARMA",
    techStack: ["R&D", "CPOB"],
  },
  {
    number: '06',
    title: { id: "Quality Control: IPC, GC-MS, HPLC & Raman", en: "Quality Control: IPC, GC-MS, HPLC & Raman" },
    description: { id: "In Process Control tablet, preparasi sampel GC-MS (cemaran Dietilen Glikol) dan HPLC, sampling bahan baku, dan identifikasi dengan Spektrofotometer Raman.", en: "Tablet In Process Control, sample preparation for GC-MS (diethylene glycol contamination) and HPLC, raw material sampling, and identification with Raman spectrophotometry." },
    framework: "PT MUTIARA MUKTI FARMA",
    techStack: ["Quality Control", "IPC"],
  },
  {
    number: '07',
    title: { id: "Quality Assurance: RPN, CAPA, BMR & Change Control", en: "Quality Assurance: RPN, CAPA, BMR & Change Control" },
    description: { id: "Pengkajian mutu produk, analisis risiko RPN dan CAPA, peninjauan Batch Manufacturing Record, serta prosedur Change Control.", en: "Product quality review, RPN risk analysis and CAPA, Batch Manufacturing Record review, and Change Control procedures." },
    framework: "PT MUTIARA MUKTI FARMA",
    techStack: ["Quality Assurance", "CAPA"],
  },
  {
    number: '08',
    title: { id: "Cold Chain Product & Aplikasi SMILE", en: "Cold Chain Products & the SMILE Application" },
    description: { id: "Pengelolaan sediaan farmasi dan Cold Chain Product, pencatatan suhu, serta pelaporan penggunaan vaksin melalui aplikasi SMILE.", en: "Management of pharmaceutical supplies and Cold Chain Products, temperature recording, and vaccine-use reporting through the SMILE application." },
    framework: "PUSKESMAS PAYUNG SEKAKI",
    techStack: ["Cold Chain", "SMILE"],
  },
  {
    number: '09',
    title: { id: "Pelayanan Resep, Prolanis & Posyandu", en: "Prescription Services, Prolanis & Posyandu" },
    description: { id: "Skrining lebih dari 50 resep per hari, PIO, konseling, edukasi pasien Prolanis, serta edukasi kesehatan dan swamedikasi di Posyandu.", en: "Screening more than 50 prescriptions per day, DIS, counseling, education for Prolanis patients, and health education and self-medication at Posyandu." },
    framework: "PUSKESMAS PAYUNG SEKAKI",
    techStack: ["Puskesmas", "Prolanis"],
  },
  {
    number: '10',
    title: { id: "Pengkajian Resep, Konseling & Swamedikasi", en: "Prescription Review, Counseling & Self-Medication" },
    description: { id: "Pengkajian lebih dari 10 resep per hari, KIE, konseling, PIO, dan swamedikasi dengan batas rujukan ke dokter.", en: "Review of more than 10 prescriptions per day, patient education, counseling, DIS, and self-medication with referral limits to a doctor." },
    framework: "APOTEK KELUARGA",
    techStack: ["Farmasi Komunitas", "Swamedikasi"],
  },
  {
    number: '11',
    title: { id: "Pengelolaan Sediaan: FEFO & FIFO", en: "Pharmaceutical Stock Management: FEFO & FIFO" },
    description: { id: "Penerimaan, penyimpanan, penataan, pengendalian stok, dan monitoring tanggal kedaluwarsa dengan prinsip FEFO dan FIFO.", en: "Receiving, storage, arrangement, stock control, and expiry-date monitoring using the FEFO and FIFO principles." },
    framework: "APOTEK KELUARGA",
    techStack: ["Pengelolaan Obat", "FEFO"],
  },
  {
    number: '12',
    title: { id: "Penerapan CDOB dalam Distribusi Obat", en: "Applying GDP (CDOB) in Drug Distribution" },
    description: { id: "Penerimaan, pemeriksaan, penyimpanan, dan penyiapan pesanan berdasarkan Surat Pesanan, dengan traceability dan pemantauan suhu penyimpanan.", en: "Receiving, inspection, storage, and order preparation based on purchase orders, with traceability and storage temperature monitoring." },
    framework: "PT MARGA NUSANTARA JAYA (PBF)",
    techStack: ["CDOB", "Traceability"],
  },
  {
    number: '13',
    title: { id: "Narkotika, Psikotropika, OOT & Penanganan Retur", en: "Narcotics, Psychotropics, OOT & Returns Handling" },
    description: { id: "Mempelajari pengelolaan Narkotika, Psikotropika, dan OOT serta penanganan produk rusak, kedaluwarsa, dan retur.", en: "Studied the management of narcotics, psychotropics, and OOT, and the handling of damaged, expired, and returned products." },
    framework: "PT MARGA NUSANTARA JAYA (PBF)",
    techStack: ["Narkotika", "Retur"],
  },
  {
    number: '14',
    title: { id: "Evaluasi Penyimpanan Obat Berdasarkan Standar CDOB 2025", en: "Evaluation of Drug Storage Based on CDOB 2025 Standards" },
    description: { id: "Salah satu penulis artikel ilmiah tentang kesesuaian sistem penyimpanan obat pada salah satu PBF di Kota Pekanbaru (Vol. 9 No. 7, halaman 1840–1849).", en: "One of the authors of a scientific article on the compliance of a drug storage system at a pharmaceutical wholesaler in Pekanbaru (Vol. 9 No. 7, pages 1840–1849)." },
    framework: "JURNAL KOLABORATIF SAINS (2026)",
    techStack: ["Publikasi", "CDOB"],
  },
  {
    number: '15',
    title: { id: "Poster Edukasi “Tampil Cantik dengan Kosmetik Aman”", en: "Education Poster “Tampil Cantik dengan Kosmetik Aman”" },
    description: { id: "Salah satu pencipta poster edukasi kesehatan yang memperoleh pencatatan Hak Cipta (No. 001017780) dari Kementerian Hukum RI.", en: "One of the creators of a health education poster that received a Copyright registration (No. 001017780) from the Indonesian Ministry of Law." },
    framework: "HAK CIPTA (2025)",
    techStack: ["Hak Cipta", "Edukasi"],
  },
]

export default function ProjectList() {
  const { lang } = useLanguage()
  const en = lang === 'en'

  return (
    <section id="technical" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-3">{en ? 'PHARMACEUTICAL PORTFOLIO & EXPERIENCE' : 'PORTOFOLIO KEFARMASIAN & PENGALAMAN'}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">{en ? 'Clinical, Industry & Distribution Experience' : 'Pengalaman Klinis, Industri & Distribusi'}</h2>
          <p className="text-[var(--muted)] text-sm max-w-lg">
            {en
              ? 'A record of professional practice in a hospital, the pharmaceutical industry, a community health center, a pharmacy, and a pharmaceutical wholesaler, plus scientific and copyright achievements.'
              : 'Rekam jejak praktik profesi di rumah sakit, industri farmasi, puskesmas, apotek, dan pedagang besar farmasi, beserta pencapaian publikasi ilmiah dan hak cipta.'}
          </p>
        </div>

        <div className="divide-y divide-[var(--card-border)]">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group flex items-start gap-4 md:gap-8 py-6 hover:bg-[var(--card-bg)] hover:px-4 rounded-lg transition-all duration-300"
            >
              <span className="text-[var(--muted)] text-sm font-semibold mt-1 shrink-0 w-8 font-sans">{project.number}</span>

              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base mb-1">{project.title[lang]}</h3>
                <p className="text-[var(--muted)] text-sm mb-2 leading-relaxed">{project.description[lang]}</p>
                <p className="text-[var(--muted)] text-xs tracking-wider uppercase mb-3 font-semibold">{project.framework}</p>
                <div className="flex flex-wrap items-center gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className={`px-2.5 py-1 rounded-md text-white text-[10px] font-semibold tracking-wide ${colorFor(tech)}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors mt-1 shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
