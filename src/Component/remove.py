from rembg import remove
import numpy as np
import io
from PIL import Image

input_path = 'C:\Users\skb90\OneDrive\Desktop\Kisanagriculture\public\delivery.jpg'
output_path = 'C:\Users\skb90\OneDrive\Desktop'

with open(input_path, 'rb') as i:
    with open(output_path, 'wb') as o:
        input_data = i.read()
        output_data = remove(input_data)
        o.write(output_data)
