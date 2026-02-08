yesBtn.onclick = () => {
            confetti({ particleCount: 200, spread: 80, origin: { y: 0.6 } });
            
            // สร้างสไตล์ขยับรูปภาพแบบนุ่มนวล
            const style = document.createElement('style');
            style.innerHTML = `
                @keyframes flowerFloat {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-10px) rotate(2deg); }
                }
                .floating-img { animation: flowerFloat 3s ease-in-out infinite; }
            `;
            document.head.appendChild(style);

            document.getElementById('love-card').innerHTML = `
                <h1 style="font-size: 2.8rem; text-transform: uppercase;">I KNEW IT! ❤️</h1>
                
                <p style="font-size: 1.2rem; margin: 15px 0; font-family: 'Mali';">
                    สัญญาว่าจะดูแลอย่างดีที่สุดเลย
                </p>
                
                <div style="padding: 10px 0;">
                    <img src="img/img1.png" 
                         class="floating-img" 
                         style="width: 250px; border-radius: 20px;" 
                         alt="Success"
                         onerror="this.src='https://cdn-icons-png.flaticon.com/512/3206/3206013.png'">
                </div>
                
                <p style="color: var(--pink-deep); 
                          font-weight: bold; 
                          margin-top: 15px; 
                          font-size: 1.8rem; 
                          font-family: 'Dancing Script', cursive; 
                          text-transform: uppercase;
                          letter-spacing: 2px;">
                    Happy Valentine's Day!
                </p>
            `;
        };