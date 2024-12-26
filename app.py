import streamlit as st
import pandas as pd

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
            padding: 0rem 1rem;
        }
        .stApp {
            max-width: 1200px;
            margin: 0 auto;
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
        </style>
    """, unsafe_allow_html=True)

    # Header Section
    col1, col2 = st.columns([2, 1])
    
    with col1:
        st.title("Matteo Giacomo Prina")
        st.subheader("Senior Researcher in Energy Systems")
        st.write("🏢 Eurac Research Institute for Renewable Energy, Bolzano (Italy)")
        st.write("📧 Matteogiacomo.prina@eurac.edu")

    # Metrics
    st.subheader("Research Impact")
    col1, col2, col3 = st.columns(3)
    with col1:
        st.metric("H-index (Scopus)", "17", "1108 citations")
    with col2:
        st.metric("H-index (Google Scholar)", "19", "1526 citations")
    with col3:
        st.metric("Open Access Publications", "7", "of top 10 papers")

    # Tabs for different sections
    tab1, tab2, tab3, tab4 = st.tabs(["Experience", "Education", "Publications", "Awards"])

    with tab1:
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

    with tab2:
        st.header("Education")
        
        st.subheader("PhD in Energy Engineering (2015-2019)")
        st.write("Politecnico di Milano - Cum Laude")
        st.write("Thesis: 'Renewable energy high penetration scenarios using bottom-up modelling'")
        
        st.subheader("MSc in Management Engineering (2011-2013)")
        st.write("Politecnico di Milano")
        st.write("Energy & Sustainability Management")

    with tab3:
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
        st.dataframe(df, hide_index=True)

    with tab4:
        st.header("Awards & Recognition")
        
        st.markdown("""
        - **National Scientific Qualification** as Associate Professor (2024)
        - **EUREGIO Young Researcher Award 2021** - 2nd Place
        - **Best Paper Award** at SDEWES Conference 2020
        - **Best Presentation Award** at SES Conference 2020
        """)

    # Footer
    st.markdown("---")
    st.markdown("Connect with me: [ResearchGate](https://www.researchgate.net/profile/Matteo_Prina) | [Google Scholar](https://scholar.google.it/citations?user=i_GqXEsAAAAJ&hl=it)")

if __name__ == "__main__":
    main()
