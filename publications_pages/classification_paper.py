import streamlit as st
import plotly.express as px
import pandas as pd

def render():
    st.subheader("Classification and challenges of bottom-up energy system models — public summary (2020)")
    st.markdown("""
    This page provides an accessible summary of the model classification paper and shows a single representative figure (Figure 2) as requested.
    """)

    st.markdown("**Figure 2 — Model taxonomy (proxy)**")
    df = pd.DataFrame({"category":["Top-down","Bottom-up","Hybrid","Agent-based"], "count":[10,25,7,3]})
    fig = px.pie(df, names='category', values='count', title='Model taxonomy (proxy for Figure 2)')
    st.plotly_chart(fig, use_container_width=True)

    st.markdown("""
    **Plain-language summary (English):**

    The paper classifies energy system models focusing on bottom-up approaches, their strengths and limitations. It discusses challenges in data requirements, computational scalability, and transparency, and proposes best-practice recommendations for model comparability.
    """)
