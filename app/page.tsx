export default function Page(){
  return (
    <main style={{padding:'24px', maxWidth:'900px', margin:'0 auto'}}>
      <h1>🎓 PuertoSolBot - IES Puerto de la Torre</h1>
      <div style={{display:'flex', gap:'12px', marginTop:'20px'}}>
        <div style={{flex:1, border:'1px solid #ddd', borderRadius:'12px', padding:'16px'}}><h3>Faltas</h3><p>✅ Sin faltas</p></div>
        <div style={{flex:1, border:'1px solid #ddd', borderRadius:'12px', padding:'16px'}}><h3>Amonestaciones</h3><p>✅ Limpio</p></div>
        <div style={{flex:1, border:'1px solid #fbbf24', borderRadius:'12px', padding:'16px', background:'#fffbeb'}}><h3>📋 Observaciones</h3><p>Revisa cada día a las 8:00 y te avisa por Telegram</p></div>
      </div>
      <p style={{marginTop:'20px', color:'#16a34a'}}>✅ Despliegue correcto</p>
    </main>
  )
}
