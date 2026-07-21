import os
import subprocess
import sys
from fpdf import FPDF

pdf = FPDF()
pdf.set_auto_page_break(auto=True, margin=15)

# --- PORTADA ---
pdf.add_page()
if os.path.exists("linux.png"):
    try:
        # FPDF center alignment for images requires computing the X coordinate or using x='C' in recent versions.
        # However, for compatibility with fpdf2, x='C' works well.
        pdf.image("linux.png", w=170, x='C')
    except Exception as e:
        print(f"Error loading linux.png: {e}")

pdf.set_font("Times", size=20, style='B')
pdf.ln(15)
pdf.cell(0, 10, txt="CARPETA DE DATOS EN LINUX", ln=1, align="C")
pdf.ln(10)
pdf.set_font("Times", size=16)
pdf.cell(0, 10, txt="Publicacion de paginas web (MF0952_2)", ln=1, align="C")
pdf.ln(10)
pdf.cell(0, 10, txt="Unidad Didactica 1. Caracteristicas de seguridad en la", ln=1, align="C")
pdf.cell(0, 10, txt="publicacion de paginas web", ln=1, align="C")
pdf.ln(10)
pdf.cell(0, 10, txt="Actividad 3_Caso practico.", ln=1, align="C")
pdf.ln(30)
pdf.set_font("Times", size=12)
pdf.cell(0, 8, txt="Alumno: Alfonso Rubio Rioseras", ln=1, align="L")
pdf.cell(0, 8, txt="Fecha: Julio 2026", ln=1, align="L")

# --- CONTENIDO ---
pdf.add_page()
pdf.set_font("Times", size=24, style='B')
pdf.cell(0, 20, txt="Preguntas y actividades a realizar", ln=1, align="L")
pdf.set_font("Times", size=12)
texto_intro = ("Pregunta 1. Desde un sistema operativo Linux realice las siguientes acciones, "
               "siempre trabajando desde una terminal. Realice una captura de pantalla de cada "
               "apartado donde se vean las acciones realizadas:")
pdf.multi_cell(0, 6, txt=texto_intro)
pdf.ln(10)

images = [
    ("a. Acceda a una terminal.", "apartasdo a linux.png"),
    ("b. Compruebe en que ruta nos encontramos al abrir la terminal.", "apartado b linux.png"),
    ("c. Cree una nueva carpeta llamada 'www'.\nd. Dentro de la carpeta 'www' cree las subcarpetas 'img', 'js', 'css' y 'datos'.", "apartado d linux.png"),
    ("e. Mostrar que se han creado listando el contenido de la carpeta www.", "apartado e linux.png"),
    ("f. Copie la carpeta 'img' a la carpeta 'datos' y muestre el resultado.", "apartado f linux.png"),
    ("g. Cambie el nombre a la carpeta 'datos' por 'datosmalos' y muestre el resultado.", "apartado g linux.png"),
    ("h. Muestre los permisos de la carpeta 'datosmalos'.", "apartado h linux.png"),
    ("i. Modifique los permisos de 'datosmalos' de forma que solo el propietario del archivo tenga permisos de escritura y no los tengan los del grupo y los otros.", "apartasdo i linux.png"),
    ("j. Borre definitivamente la carpeta 'datosmalos'.", "apartado j linux.png"),
]

for title, img_file in images:
    if os.path.exists(img_file):
        pdf.set_font("Times", size=12)
        # multi_cell to handle long titles gracefully
        pdf.multi_cell(0, 6, txt=title)
        pdf.ln(4)
        
        # Calculate image width to fit page, maintaining aspect ratio
        img_w = 170
        try:
            # We just insert the image, fpdf handles the aspect ratio if we give it only w
            pdf.image(img_file, w=img_w)
        except Exception as e:
            pdf.cell(0, 10, txt=f"[Error loading image: {e}]", ln=1)
        pdf.ln(10)
    else:
        pdf.cell(0, 10, txt=f"{title}", ln=1)
        pdf.set_font("Times", size=10, style='I')
        pdf.cell(0, 8, txt=f"[Imagen no encontrada: {img_file}]", ln=1)
        pdf.ln(5)

pdf.output("Actividad_3_Caso_Practico_Estilizado.pdf")
print("PDF estilizado generado con exito: Actividad_3_Caso_Practico_Estilizado.pdf")
