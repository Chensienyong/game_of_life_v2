from PIL import Image
im = Image.open('13corder.png', 'r')
pix_val = list(im.getdata())

for n, i in enumerate(pix_val):
  if i[0] == 255:
    pix_val[n] = False
  else:
    pix_val[n] = True

res = []
curr = []
for idx, val in enumerate(pix_val):
  if(idx != 0 and idx%202 == 0):
    res.append(curr)
    curr = []
  curr.append(val)

res.append(curr)

with open("output.txt", "w") as txt_file:
  for line in res:
    txt_file.write("".join(str(line)) + ",\n")
