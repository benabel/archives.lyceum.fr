import re

BBND = re.compile(r"\d{4}(?=\s+)")
BBN = re.compile(r"\d{3}(?=\s+)")
BB = re.compile(r"\d{2}(?=\s+)")
g = open("hierarchy_generated.tsv", "w")
print("code\tlabel\tparent", file=g)
print("0\tISDEC Codes\t", file=g)
with open("./ISDEC-FieldsOfEducationCodes.tsv", encoding="utf-8") as f:
    N = 0
    for line in f.readlines():
        line = line.strip()
        mBB, mBBN, mBBND = BB.match(line),BBN.match(line), BBND.match(line)
        if mBBND:
            N = 0
            codeBBND = mBBND[0].strip()
            print(line + "\t" + codeBBND[:3], file=g)
        elif mBBN:
            print(line + "\t" + mBBN[0].strip()[:2], file=g)
        elif mBB:
            print(line+ "\t0", file=g)
        else:
            print(f"{codeBBND}{N:02d}\t{line}\t{codeBBND}", file=g)
            N += 1

