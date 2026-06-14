import streamlit as st
from PIL import Image

def get_vcard():
    return """BEGIN:VCARD
VERSION:3.0
N:Prina;Matteo Giacomo;;;
FN:Matteo Giacomo Prina
TITLE:Research Group Leader, Overall Energy System Modelling and E-Mobility
ORG:Eurac Research;Institute for Renewable Energy
TEL;TYPE=WORK,VOICE:+39 0471 055 587
EMAIL;TYPE=INTERNET,WORK:matteogiacomo.prina@eurac.edu
URL:https://www.eurac.edu/en/people/matteo-giacomo-prina
X-ORCID:https://orcid.org/0000-0002-3240-9156
END:VCARD
"""


def main():
    st.set_page_config(
        page_title="Matteo Giacomo Prina | Energy Systems Modeling",
        page_icon="🔋",
        layout="wide"
    )

    st.markdown(
        """
        <style>
        .stApp {
            max-width: 1200px;
            margin: 0 auto;
        }
        .block-container {
            padding-top: 3rem;
            padding-bottom: 2rem;
            padding-left: 1rem;
            padding-right: 1rem;
        }
        h1, h2, h3 {
            color: #1f4f4f;
        }
        .header-text {
            color: #444444;
            font-size: 1.1rem;
            margin-bottom: 1rem;
            border-bottom: 1px solid #d7d7d7;
            padding-bottom: 0.5rem;
        }
        .card {
            background-color: #f8f9fa;
            border-radius: 10px;
            padding: 1rem;
            margin-bottom: 1rem;
        }
        .small-text {
            color: #555555;
            font-size: 0.95rem;
        }
        </style>
        """,
        unsafe_allow_html=True,
    )

    st.markdown('<p class="header-text">Matteo Giacomo Prina — Group Leader, Energy Systems Modeling and E-Mobility</p>', unsafe_allow_html=True)

    tabs = st.tabs(["Home", "Biography", "Projects", "Publications", "Awards", "Research", "Contacts"])

    with tabs[0]:
        col1, col2 = st.columns([0.65, 0.35])

        with col1:
            st.title("Matteo Giacomo Prina")
            st.subheader("Research Group Leader | Institute for Renewable Energy | Eurac Research")
            st.write("📍 Bolzano, Italy")
            st.write("📧 matteogiacomo.prina@eurac.edu")
            st.write("📞 +39 0471 055 587")

            st.markdown("---")
            st.markdown(
                """
                Dr. Matteo Giacomo Prina is Group Leader of the Overall Energy System Modelling and E-Mobility group at the Institute for Renewable Energy, Eurac Research.
                He holds a Ph.D. in Energy and Nuclear Science and Technology from Politecnico di Milano.

                Since 2014, Dr. Prina has advanced energy system modeling by integrating artificial intelligence, optimization algorithms, and participatory planning frameworks. His research supports authorities in implementing clean energy transition strategies and coupling transport with broader energy systems.

                A recent research focus is AI-enhanced surrogate models for uncertainty analysis in large-scale energy systems, enabling faster, more transparent, and uncertainty-aware decision-making.
                """
            )

            st.markdown(
                """
                - Group Leader, Overall Energy System Modelling and E-Mobility group
                - Project coordinator for LIFE PLANtoACT, V2G-BOOST, AIchargeMAP, and IOMSES
                - Member of the Open Energy Modelling Initiative (OpenMod)
                - Reviewer for Nature Energy, Applied Energy, Renewable and Sustainable Energy Reviews
                """
            )

            st.markdown("**External profiles:**")
            st.markdown(
                """
                - [EURAC Research profile](https://www.eurac.edu/en/people/matteo-giacomo-prina)
                - [Google Scholar](https://scholar.google.com/citations?user=i_GqXEsAAAAJ&hl=en#)
                - [ORCID](https://orcid.org/0000-0002-3240-9156)
                - [LinkedIn](https://www.linkedin.com/in/matteo-giacomo-prina-999248b/)
                """
            )

        with col2:
            try:
                image = Image.open("profile.jpg")
                st.image(image, width=250)
            except FileNotFoundError:
                st.info("Add a 'profile.jpg' image file to display your portrait here.")

            st.markdown(
                """
                <div class="card">
                <h3>Contact snapshot</h3>
                <p class="small-text">Research Group Leader, Institute for Renewable Energy, Eurac Research</p>
                <p class="small-text">matteogiacomo.prina@eurac.edu</p>
                <p class="small-text">+39 0471 055 587</p>
                <p class="small-text">Bolzano, Italy</p>
                </div>
                """,
                unsafe_allow_html=True,
            )

            vcard = get_vcard()
            st.download_button(
                label="Download contact vCard",
                data=vcard,
                file_name="Matteo_Giacomo_Prina.vcf",
                mime="text/vcard",
            )

    with tabs[1]:
        st.header("Biography")
        st.markdown(
            """
            **Current role**

            Dr. Matteo Prina leads the Overall Energy System Modelling and E-Mobility group at Eurac Research’s Institute for Renewable Energy. His team works at the intersection of energy system modeling, transport sector integration, and sustainable transition planning.

            **Research profile**

            His work combines AI, optimization algorithms, and participatory processes to build robust and transparent energy transition scenarios. He frequently collaborates with public authorities to support regional and municipal clean energy strategies.

            **Academic background**

            - Ph.D. in Energy and Nuclear Science and Technology, Politecnico di Milano
            - MSc in Management Engineering, Politecnico di Milano
            """
        )

        st.subheader("Selected career milestones")
        st.markdown(
            """
            - 2014: Joined Eurac Research
            - 2019: Completed Ph.D. at Politecnico di Milano
            - 2022: Appointed Senior Researcher and Group Leader at Eurac Research
            - 2024: National Scientific Qualification as Associate Professor in Fluid Machinery, Energy Systems, and Power Generation
            - 2025: Junior Research Award Südtirol/Alto Adige
            """
        )

    with tabs[2]:
        st.header("Coordinated Projects")
        st.markdown(
            """
            - [LIFE PLANtoACT](https://webgate.ec.europa.eu/life/publicWebsite/project/LIFE24-CET-PLANtoACT-101214506/bridging-the-gap-from-planning-to-action-capacity-building-for-regions-and-municipalities-in-implementing-clean-energy-transition-strategies) — capacity-building for regions and municipalities in implementing clean energy transition strategies
            - [V2G-BOOST](https://www.eurac.edu/en/projects/v2g-boost) — EFRE project on vehicle-to-grid innovation
            - [AIchargeMAP](https://www.eurac.edu/it/projects/aichargemap) — AI-supported charging station expansion planning
            - [IOMSES](https://www.eurac.edu/en/projects/iomses) — PNRR project on integrated optimization of mobility and energy systems
            """
        )

        st.markdown("**Additional project interests:**")
        st.markdown(
            """
            - AI-enhanced surrogate models for uncertainty-aware energy system planning
            - Integrated sector-coupling and transport-energy system solutions
            - Participatory regional and municipal energy transition frameworks
            """
        )

    with tabs[3]:
        st.header("Selected Publications")
        st.markdown(
            """
            1. **Deep learning surrogate model to explain decision variable synergies in energy system modelling** (2026). DOI: [10.1016/j.segy.2026.100246](https://doi.org/10.1016/j.segy.2026.100246)
            2. **Impact of sufficiency on achieving the EU's 2030 and 2050 greenhouse gas emissions targets** (2026). DOI: [10.1016/j.sftr.2026.101791](https://doi.org/10.1016/j.sftr.2026.101791)
            3. **A Composite Indicator for Assessing Upscaled Energy Sufficiency and Sustainable Prosperity in the European Union** (2025). DOI: [10.13044/j.sdi.d2.0558](https://doi.org/10.13044/j.sdi.d2.0558)
            4. **Advancing renewable energy community planning through integrated sector-coupling and economies of scale** (2025). DOI: [10.1016/j.apenergy.2025.125942](https://doi.org/10.1016/j.apenergy.2025.125942)
            5. **Electrification and flexibility of process heat in energy system modelling: A review** (2025). DOI: [10.1016/j.rser.2025.115698](https://doi.org/10.1016/j.rser.2025.115698)
            """
        )

    with tabs[4]:
        st.header("Awards & Recognition")
        st.markdown(
            """
            - **Junior Research Award Südtirol/Alto Adige** (2025)
            - **EUREGIO Young Researcher Award** (2021)
            - **National Scientific Qualification** as Associate Professor in Fluid Machinery, Energy Systems, and Power Generation (2024)
            - Reviewer and scientific advisor for leading journals including Nature Energy and Applied Energy
            """
        )

    with tabs[5]:
        st.header("Research Focus")
        st.markdown(
            """
            **Core expertise**
            - Energy system modeling and optimization
            - AI and surrogate modeling for large-scale energy models
            - Sector coupling of transportation, heating, and electricity
            - Participatory planning with regional and municipal stakeholders

            **Technical strengths**
            - Optimization algorithms and multi-objective analysis
            - AI-enhanced uncertainty analysis
            - Bottom-up and hybrid energy system modeling
            - Model comparability and interpretability
            """
        )

        st.subheader("Key themes")
        st.markdown(
            """
            - Integrated energy-transport system planning
            - Vehicle-to-grid and charging infrastructure expansion
            - Renewable energy community design and economies of scale
            - Sufficiency, resilience, and sustainable prosperity metrics
            """
        )

    with tabs[6]:
        st.header("Contacts")
        col1, col2 = st.columns(2)

        with col1:
            st.markdown(
                """
                **Eurac Research**

                Institute for Renewable Energy
                Via A. Volta 13/A
                39100 Bolzano, Italy
                """
            )
            st.write("**Email:** matteogiacomo.prina@eurac.edu")
            st.write("**Phone:** +39 0471 055 587")
            st.write("**ORCID:** https://orcid.org/0000-0002-3240-9156")
            st.write("**EURAC profile:** https://www.eurac.edu/en/people/matteo-giacomo-prina")

            vcard = get_vcard()
            st.download_button(
                label="Download vCard",
                data=vcard,
                file_name="Matteo_Giacomo_Prina.vcf",
                mime="text/vcard",
            )

        with col2:
            st.markdown(
                """
                **Professional profiles**

                - [EURAC Research profile](https://www.eurac.edu/en/people/matteo-giacomo-prina)
                - [Google Scholar](https://scholar.google.com/citations?user=i_GqXEsAAAAJ&hl=en#)
                - [ORCID](https://orcid.org/0000-0002-3240-9156)
                - [LinkedIn](https://www.linkedin.com/in/matteo-giacomo-prina-999248b/)
                - [ResearchGate](https://www.researchgate.net/profile/Matteo_Prina)
                """
            )


if __name__ == "__main__":
    main()
