clear
echo "Let's begin, $USER"

echo "Are you really sure about this?"

for i in *.md
do
    m2j "$i" >> "$i.json"
done

for file in *.md.json
do
    mv -i "${file}" "${file/.md.json/.json}"
done

