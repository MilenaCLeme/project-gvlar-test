-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    "hashedRefreshToken" TEXT,
    "phone" TEXT NOT NULL,
    "validation" BOOLEAN NOT NULL DEFAULT false,
    "role" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "immobile" (
    "id" SERIAL NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "type" TEXT NOT NULL,
    "about" TEXT NOT NULL,
    "vsell" TEXT,
    "vboth" TEXT,
    "iptu" TEXT NOT NULL,
    "describe" TEXT NOT NULL,
    "footage" INTEGER NOT NULL,
    "bed" INTEGER NOT NULL,
    "bathroom" INTEGER NOT NULL,
    "vacancy" INTEGER NOT NULL,
    "address" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "complement" TEXT,
    "postalcode" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "recordId" INTEGER,

    CONSTRAINT "immobile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "photograph" (
    "id" SERIAL NOT NULL,
    "describe" VARCHAR(250) NOT NULL,
    "url" TEXT NOT NULL,
    "immobileId" INTEGER,

    CONSTRAINT "photograph_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "owner" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,

    CONSTRAINT "owner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "immobileonowner" (
    "immobileId" INTEGER NOT NULL,
    "ownerId" INTEGER NOT NULL,

    CONSTRAINT "immobileonowner_pkey" PRIMARY KEY ("immobileId","ownerId")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "owner_email_key" ON "owner"("email");

-- AddForeignKey
ALTER TABLE "immobile" ADD CONSTRAINT "immobile_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "photograph" ADD CONSTRAINT "photograph_immobileId_fkey" FOREIGN KEY ("immobileId") REFERENCES "immobile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "immobileonowner" ADD CONSTRAINT "immobileonowner_immobileId_fkey" FOREIGN KEY ("immobileId") REFERENCES "immobile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "immobileonowner" ADD CONSTRAINT "immobileonowner_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "owner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
