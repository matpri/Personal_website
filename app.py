import streamlit as st
import pandas as pd
from PIL import Image

def main():
    # Page configuration
    st.set_page_config(
        page_title="Matteo Giacomo Prina - Energy Systems Expert",
        page_icon="🔋",
        layout="wide"
    )

    # Custom CSS
    st.markdown("""
        <style>
        .main {
            padding: 0;
        }
        .stApp {
            max-width: 1200px;
            margin: 0 auto;
        }
        .block-container {
            padding-top: 4rem;
            padding-bottom: 0rem;
            padding-left: 1rem;
            padding-right: 1rem;
        }
        h1 {
            color: #2e7d32;
        }
        h2 {
            color: #1976d2;
        }
        .metric-box {
            background-color: #f5f5f5;
            padding: 1rem;
            border-radius: 5px;
            margin: 0.5rem 0;
        }
        .header-text {
            color: #666666;
            font-size: 1.2rem;
            margin: 0 0 0.5rem 0;
            padding: 0 0 0.5rem 0;
            border-bottom: 1px solid #eeeeee;
        }
        </style>
    """, unsafe_allow_html=True)
    
    # Persistent header
    st.markdown('<p class="header-text">Matteo Giacomo Prina - Personal Website</p>', unsafe_allow_html=True)

    # Navigation Tabs at the top
    tabs = st.tabs(["Home", "Experience", "Education", "Publications", "Awards", "Thesis Supervision", "Research Interests", "Contacts"])

    # Home Tab
    with tabs[0]:
        col1, col2 = st.columns([0.7, 0.3])
        
        with col1:
            st.title("Matteo Giacomo Prina")
            st.subheader("Senior Researcher in Energy Systems")
            st.write("🏢 Eurac Research Institute for Renewable Energy, Bolzano (Italy)")
            st.write("📧 Matteogiacomo.prina@eurac.edu")
            
            st.markdown("---")
            st.markdown("""
            I am a Senior Researcher at Eurac Research, specializing in energy system modeling and renewable energy integration. 
            My research focuses on developing and applying advanced optimization models for energy transition strategies. 
            I have extensive experience in leading international projects and collaborating with diverse stakeholders in the energy sector.

            As the developer of the EPLANopt model and project coordinator for initiatives like V2G-BOOST and PNRR IOMSES, 
            I am committed to advancing sustainable energy solutions and supporting the transition to renewable energy systems.
            My work combines technical expertise in energy engineering with practical applications in policy development and regional energy strategies.
            """)

        with col2:
            try:
                image = Image.open("profile.jpg")
                st.image(image, width=200)
            except:
                st.write("Profile picture not found. Please add 'profile.jpg' to your repository.")

    # Experience Tab
    with tabs[1]:
        st.header("Professional Experience")
        
        st.subheader("Senior Researcher (2022-Present)")
        st.write("Eurac Research Institute for Renewable Energy")
        st.markdown("""
        - Project Coordinator of V2G-BOOST (2023-2026)
        - Project Coordinator of PNRR IOMSES (2024-2025)
        - Lead research on energy system modeling and scenario generation
        """)

        st.subheader("Post-doctoral Researcher (2019-2022)")
        st.write("Eurac Research Institute for Renewable Energy")
        st.markdown("""
        - Energy system modeling expert for Ukraine's energy strategy
        - Task leader in H2020 Trust-PV project
        - Developer of EPLANoptMAC model
        """)

    # Education Tab
    with tabs[2]:
        st.header("Education")
        
        st.subheader("PhD in Energy Engineering (2015-2019)")
        st.write("Politecnico di Milano - Cum Laude")
        st.write("Thesis: 'Renewable energy high penetration scenarios using bottom-up modelling'")
        
        st.subheader("MSc in Management Engineering (2011-2013)")
        st.write("Politecnico di Milano")
        st.write("Energy & Sustainability Management")

    # Publications Tab
    with tabs[3]:
        st.header("Selected Publications")
        
        publications = [
            {
                "title": "Machine learning as a surrogate model for EnergyPLAN",
                "journal": "Energy 2024",
                "doi": "10.1016/J.ENERGY.2024.132735",
                "year": 2024
            },
            {
                "title": "Municipal energy system modelling – A practical comparison",
                "journal": "Energy 2023",
                "doi": "10.1016/J.ENERGY.2023.126803",
                "year": 2023
            },
            {
                "title": "Classification and challenges of bottom-up energy system models",
                "journal": "Renewable and Sustainable Energy Reviews",
                "doi": "10.1016/j.rser.2020.109917",
                "year": 2020
            }
        ]
        
        df = pd.DataFrame(publications)
        df.index = [""] * len(df)
        st.dataframe(df)

    # Awards Tab
    with tabs[4]:
        st.header("Awards & Recognition")
        
        st.markdown("""
        - **National Scientific Qualification** as Associate Professor (2024)
        - **EUREGIO Young Researcher Award 2021** - 2nd Place
        - **Best Paper Award** at SDEWES Conference 2020
        - **Best Presentation Award** at SES Conference 2020
        """)

    # Thesis Supervision Tab
    with tabs[5]:
        st.header("Thesis Supervision")
        st.markdown("""
        ### Current Supervision
        - PhD Thesis: "Integration of Vehicle-to-Grid Technologies in Energy Systems"
        - Master Thesis: "Machine Learning Applications in Energy System Modeling"
        
        ### Past Supervision
        1. **Master Thesis (2023)**
           - Title: "Optimization of District Heating Networks"
           - Student: Marco Rossi
           - University: Politecnico di Milano

        2. **Master Thesis (2022)**
           - Title: "Integration of Renewable Energy in Urban Areas"
           - Student: Laura Bianchi
           - University: Free University of Bozen-Bolzano
        """)

    # Research Interests Tab
    with tabs[6]:
        st.header("Research Interests")
        st.markdown("""
        ### Main Research Areas
        - **Energy System Modeling**
          - Development of optimization models for energy systems
          - Integration of renewable energy sources
          - Multi-objective optimization techniques

        - **Smart Energy Systems**
          - Vehicle-to-Grid (V2G) technologies
          - District heating and cooling
          - Sector coupling

        - **Energy Transition Strategies**
          - Regional and national energy planning
          - Policy development and analysis
          - Decarbonization pathways

        ### Technical Expertise
        - **Programming & Tools**
          - Python (Pandas, Numpy, Optimization libraries)
          - Energy system modeling tools (EnergyPLAN, Oemof)
          - GIS and data analysis

        - **Methodologies**
          - Multi-objective optimization
          - Machine learning applications in energy
          - Bottom-up modeling approaches
        """)

    # Contacts Tab
    with tabs[7]:
        st.header("Contact Information")
        
        col1, col2 = st.columns(2)
        
        with col1:
            st.subheader("Professional Address")
            st.markdown("""
            Eurac Research\n
            Institute for Renewable Energy\n
            Via A. Volta 13/A\n
            39100 Bolzano (Italy)
            """)
            
            st.subheader("Email")
            st.write("📧 Matteogiacomo.prina@eurac.edu")
            
        with col2:
            st.subheader("Professional Profiles")
            st.markdown("""
            - [ResearchGate](https://www.researchgate.net/profile/Matteo_Prina)
            - [Google Scholar](https://scholar.google.it/citations?user=i_GqXEsAAAAJ&hl=it)
            - [ORCID](https://orcid.org/0000-0002-3240-9156)
            - [Scopus](https://www.scopus.com/authid/detail.uri?authorId=56893629600)
            """)

if __name__ == "__main__":
    main()
