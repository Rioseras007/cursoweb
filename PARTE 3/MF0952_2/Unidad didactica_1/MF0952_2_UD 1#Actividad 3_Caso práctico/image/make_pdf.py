import os
import subprocess
import sys

def install(package):
    subprocess.check_call([sys.executable, "-m", "pip", "install", package])

try:
    from fpdf import FPDF
except ImportError:
    install('fpdf2')
    from fpdf import FPDF

pdf = FPDF()
pdf.set_auto_page_break(auto=True, margin=15)
pdf.add_page()
pdf.set_font("Arial", size=16, style='B')
pdf.cell(200, 10, txt="Actividad 3 - Caso practico", ln=1, align="C")
pdf.ln(10)

pdf.set_font("Arial", size=12)

images = [
    ("a. Acceda a una terminal", "apartasdo a linux.png"),
    ("b. Compruebe en que ruta nos encontramos", "apartado b linux.png"),
    ("c y d. Cree subcarpetas", "apartado d linux.png"),
    ("e. Listando el contenido", "apartado e linux.png"),
    ("f. Copie la carpeta", "apartado f linux.png"),
    ("g. Cambie el nombre", "apartado g linux.png"),
    ("h. Permisos de datosmalos", "apartado h linux.png"),
    ("i. Modifique los permisos", "apartasdo i linux.png"),
    ("j. Borre definitivamente", "apartado j linux.png"),
]

for title, img_file in images:
    if os.path.exists(img_file):
        pdf.set_font("Arial", size=12, style='B')
        pdf.cell(200, 10, txt=title, ln=1)
        pdf.ln(5)
        # Add image, width 180 max
        try:
            pdf.image(img_file, w=180)
        except Exception as e:
            pdf.cell(200, 10, txt=f"Error loading image: {e}", ln=1)
        pdf.ln(10)
    else:
        pdf.cell(200, 10, txt=f"Imagen no encontrada: {img_file}", ln=1)
        pdf.ln(5)

pdf.output("Actividad_3_Caso_Practico.pdf")
print("PDF generado con exito: Actividad_3_Caso_Practico.pdf")
