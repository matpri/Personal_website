import streamlit as st
import plotly.express as px
import pandas as pd

def render():
    st.subheader("Deep learning surrogate model to explain decision variable synergies in energy system modelling (2026)")
    st.markdown("""
    This page provides a plain-language summary and selected figures from the deep learning surrogate-model paper.

    Figures shown: Figure 2, Figure 6 (top), Figure 8, Figure 10.
    """)

    # Placeholder static figures using simple plotly examples
    st.markdown("**Figure 2 — Example: feature importance**")
    df = pd.DataFrame({"feature":["PV","BESS","P2G","HP"], "importance":[0.35,0.25,0.2,0.2]})
    fig = px.bar(df, x="feature", y="importance", title="Feature importance (proxy for Figure 2)")
    st.plotly_chart(fig, use_container_width=True)

    st.markdown("**Figure 6 (top) — Example: surrogate predictions vs. simulation**")
    df2 = pd.DataFrame({"sim":[100,120,90,110,130], "surrogate":[98,118,95,112,128]})
    fig2 = px.scatter(df2, x="sim", y="surrogate", trendline="ols", title="Surrogate vs Simulation (proxy for Figure 6)")
    st.plotly_chart(fig2, use_container_width=True)

    st.markdown("**Figure 8 — Example: pairwise interaction effect (proxy)**")
    df3 = pd.DataFrame({"x":[0,1,2,3,4], "y":[1,3,2,5,4]})
    fig3 = px.line(df3, x='x', y='y', title='Interaction effect (proxy for Figure 8)')
    st.plotly_chart(fig3, use_container_width=True)

    st.markdown("**Figure 10 — Example: sensitivity surface (proxy)**")
    z = [[1,2,3],[2,3,4],[3,4,5]]
    fig4 = px.imshow(z, title='Sensitivity surface (proxy for Figure 10)')
    st.plotly_chart(fig4, use_container_width=True)

    st.markdown("""
    **Summary (plain English):**

    The study trains a deep learning surrogate on thousands of EnergyPLAN simulations to explore how decision variables interact.
    The surrogate enables fast sensitivity analysis and reveals non-linear synergies between PV, storage and Power-to-Gas technologies.
    """)
