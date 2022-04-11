const { createClient } = require("@supabase/supabase-js")

const supabase = createClient(
    "https://llfqwsmktbsnmxkdzvip.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNzY5OTM0MywiZXhwIjoxOTUzMjc1MzQzfQ.gfdNb1WTqhR_qj7PGvIA2Y3w94_66xdZDDuGqjGusOM"
)
module.exports = supabase
