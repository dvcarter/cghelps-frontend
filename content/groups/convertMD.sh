echo "Let's begin, $USER"

for i in *.md
do
    m2j "$i" >> "$i.json"
done
