const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class DonationService
{
    static async getAllDonations()
    {
        const allDonations = await prisma.donation.findMany({});

        return allDonations;
    }

    static async getDonationByID(id)
    {
        const theID = parseInt(id);

        const donation = await prisma.donation.findUnique({where: {id: theID }});

        return donation;
    }

    static async createDonation(donationData)
    {
        // TODO Add ErrorHandling
        //      Check required fields in donationData

        await prisma.donation.create({data: donationData});

        return { message: "OK" };
    }

    static async updateDonation(id, donationData)
    {
        // TODO Add ErrorHandling
        const theID = parseInt(id);

        await prisma.donation.update({
            where: { id: theID },
            data: { donationData }
        });

        return { message: "OK" };
    }

    static async deleteDonation(id)
    {
        // TODO Add Error Handling
        const theID = parseInt(id);

        await prisma.donation.delete({ where: { id: theID }});

        return { message: "OK" };
    }
}

module.exports = DonationService;