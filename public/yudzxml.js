
    function toggleDetail(headerEl) {
      const container = headerEl.parentElement;
      container.classList.toggle("open");
    }

    function zoomImage(src) {
      document.getElementById("zoomedImage").src = src;
      document.getElementById("zoomModal").style.display = "flex";
    }

    function closeZoom() {
      document.getElementById("zoomModal").style.display = "none";
    }

fetch("https://testimoniyudzxml.vercel.app/api/github")
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("testimonialList");
    const awalCustomer = 251;
    document.getElementById("totalCustomer").textContent = awalCustomer + data.length;

    data.forEach(t => {
      const div = document.createElement("div");
      div.className = "testimonial";

      div.innerHTML = `
        <div class="header" onclick="toggleDetail(this)">
          <strong>NAMA</strong> <u>\n${t.customer}</u><br>
          <strong>TANGGAL</strong> <u>\n${t.date}</u><br>
          <strong>BARANG</strong> <u>\n${t.barang}</u><br>
          <strong>HARGA</strong> <u>\nRp ${t.harga}</u><br>
          <em>( CLICK TO EXPAND )</em>
        </div>
        <div class="details">
          <img src="${t.image}" alt="TESTIMONI" onclick="zoomImage('${t.image}')" />
        </div>
      `;
      list.appendChild(div);
    });
  })
  .catch(err => console.error("Gagal mengambil data testimoni:", err));
  